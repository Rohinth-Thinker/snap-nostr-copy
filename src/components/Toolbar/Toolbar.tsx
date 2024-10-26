import { useState } from "react";
import { GRADIENT, GRADIENTS } from "../../shared/constants";
import { Divider } from "../../shared/Global.styled";
import { GradientPicker } from "../GradientPicker/GradientPicker";
import { CopyIcon, DownloadIcon, HeartIcon, Relays } from "../Icon/Icon";
import { ColorTool, RelaysToolContainer, Tool, ToolbarContainer, ToolName } from "./Toolbar.styled";
import { RelaysModal } from "../Relays/Relays";

export type ToolbarProps = {
    onDownload: () => void,
    onCopy: () => void,
    showResponse: boolean,
    onChangeShowResponse: (showResponse: boolean) => void,
    gradient: GRADIENT,
    onGradientChange: (gradient: GRADIENT) => void,
};

export function Toolbar({
    onDownload,
    onCopy,
    showResponse,
    onChangeShowResponse,
    gradient,
    onGradientChange,
}: ToolbarProps) {

    const [ isRelayModalOpen, setIsRelayModalOpen ] = useState(false);

    return (
        <ToolbarContainer>
            <Tool>
                <GradientPicker
                    gradient={gradient}
                    onGradientChange={onGradientChange}
                />
                <ColorTool $gradient={GRADIENTS[gradient]} />
                <ToolName>Color</ToolName>
            </Tool>

            <Tool onClick={() => onChangeShowResponse(!showResponse)}>
                <HeartIcon isSelected={showResponse} />
                <ToolName>Response</ToolName>
            </Tool>

            <RelaysToolContainer>
                <Tool onClick={() => setIsRelayModalOpen(prev => !prev)}>
                    <Relays />
                    <ToolName>Relays</ToolName>
                </Tool>

                <RelaysModal
                    isOpen={isRelayModalOpen}
                    onClose={() => {
                        setIsRelayModalOpen(false);
                    }}
                />
            </RelaysToolContainer>

            {/* TODO: Add a button to configure relays */}

            <Divider />

            <Tool onClick={onCopy}>
                <CopyIcon />
                <ToolName>Copy</ToolName>
            </Tool>

            <Tool $withBackground onClick={onDownload}>
                <DownloadIcon />
                <ToolName>Download</ToolName>
            </Tool>
        </ToolbarContainer>
    )
}
