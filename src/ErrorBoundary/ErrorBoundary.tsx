import { Typography } from "@mui/material";
import { Component, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
    children: ReactNode
}

type State = {
    hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: any, errorInfo: any) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <>
                    <Typography variant="h1">Something went wrong.</Typography>
                    <a href={"/"}>Go to home</a>
                </>
            );
        }

        return this.props.children;
    }
}