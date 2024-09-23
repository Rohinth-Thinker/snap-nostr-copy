import { useEffect, useState } from "react";

export function useShakeAnimation(isError: boolean) {
    const [ isAnimate, setIsAnimate ] = useState(false);

    function addShakeAnimation() {
        setIsAnimate(true);

        setTimeout(() => {
            setIsAnimate(false);
        }, 600);
    }

    useEffect(() => {
        if(isError) {
            addShakeAnimation();
        }
    },[isError]);

    return {
        isAnimate,
        addShakeAnimation,
    }
}
