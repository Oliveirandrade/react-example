/* eslint-disable import/extensions */
import React from "react"
import Lottie from "react-lottie"

import { FRComponent } from "../../types/commonTypes"

import loaderWhite from "./loader_APP"
import loaderPrimary from "./loader_APP_primary"

interface Props extends FRComponent {
  primary: boolean;
  loaderSize?: number;
}

const Loader: React.FC<Props> = ({
    primary,
    loaderSize,
    testId
}) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: primary ? loaderPrimary : loaderWhite,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    }
    return (
        <Lottie
            options={defaultOptions}
            height={loaderSize || 24}
            width={loaderSize || 24}
            isPaused={false}
            isStopped={false}
            data-testid={testId}
        />
    )
}

export default Loader
