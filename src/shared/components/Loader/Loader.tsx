import { PanelSpinner } from "@vkontakte/vkui"
import React from "react"

interface LoaderProps {
    className?: string
}

export const Loader: React.FC<LoaderProps> = props => {
    const {
        className=''
    } = props

    return (
        <PanelSpinner className={className}>
            Панель загружается, пожалуйста, подождите...
        </PanelSpinner>
    )
}
