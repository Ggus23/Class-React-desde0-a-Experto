import { ReactNode } from "react";
import { Component, ErrorInfo } from "react";

interface ErrourBounderyState{
    hasError: boolean;
}

interface ErrourBounderyProps{
    children: ReactNode
}

class ErrourBoundery extends Component<ErrourBounderyProps, ErrourBounderyState> {
    constructor(props: ErrourBounderyProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): ErrourBounderyState {
        console.log("Derived Error", error)
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("Error:", error);
        console.log("Error:", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops! I did it again ;)</h1>;
        }
        return this.props.children;
    }
}

export default ErrourBoundery;