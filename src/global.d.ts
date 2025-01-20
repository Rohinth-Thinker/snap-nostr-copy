declare global {
    interface Window {
        mixpanel: {
            init: (token: string, config?: object, name?: string) => void;
            track: (event: string, properties?: object) => void;
            [key: string]: any; // To allow other Mixpanel methods
        };
    }
}

export {}