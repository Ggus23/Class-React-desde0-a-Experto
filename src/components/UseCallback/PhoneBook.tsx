// objetivo: se utiliza para memorizar una instancia de una funcion
// hace que un hijo no renderice 

import { memo, useCallback, useState } from "react";

// Ejemplo: 
// Supongamos que tenes un numero de telefono al que llamas con frecuencia
// En vez de marcarlo continuamente, lo guardas en una lista de contactos
// A menos que el numero cambie siempre utilizo el mismo contacto
interface Contact{
    id: number;
    name: string;
    phone: string;
}
interface ContactProps {
    contact: Contact;
    onCall: (phone: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
    console.log(`Renderizando Contacto ${contact.name}`);

    return (
        <div>
            <h3>{contact.name}</h3>
            <p>Telefono: {contact.phone}</p>
            <button onClick={() => onCall(contact.name)}>Llamar</button>
        </div>
    );
})

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: 'Juan', phone: '123456789' },
        { id: 2, name: 'Maria', phone: '987654321' },
        { id: 3, name: 'Pedro', phone: '456789123' },
    ]);

    const [log, setLog] = useState<string>('');

    const makeCall = useCallback((name: string) => setLog(`Llamando al ${name}`), []) 

    const addContact = () => {
        const newContact = {
            id: contacts.length + 1,
            name: `Nuevo Contacto ${contacts.length + 1}`,
            phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        }
        setContacts([...contacts, newContact]);
    }
    return (
        <div>
            <h2>Agenda Telefonica</h2>
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
            ))}
            <button onClick={addContact}>Agregar Contacto</button>
            <p>{log}</p>
        </div>
    )
}
