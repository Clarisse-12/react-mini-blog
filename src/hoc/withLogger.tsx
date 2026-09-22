import {useEffect} from 'react';
import type { ComponentType } from 'react';

function WithLogger<P extends object>(
    WrappedComponent: ComponentType<P>,
    componentName: string
){
    function WithLoggerComponent(props: P) {
        useEffect(() => {
            console.log(`Component ${componentName} mounted`);
            return () => {
                console.log(`Component ${componentName} unmounted`);
            };
        }, []);
        return <WrappedComponent {...props} />;
    }
    return WithLoggerComponent;
}

export default WithLogger;