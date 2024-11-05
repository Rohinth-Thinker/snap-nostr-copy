import { useState } from "react";
import { GRADIENT, GRADIENTS } from "../../shared/constants";
import { Divider } from "../../shared/Global.styled";
import { GradientPicker } from "../GradientPicker/GradientPicker";
import { CopyIcon, DownloadIcon, HeartIcon, Relays } from "../Icon/Icon";
import { ColorTool, RelaysToolContainer, Tool, ToolbarContainer, ToolbarListItem, ToolName } from "./Toolbar.styled";
import { RelaysModal } from "../Relays/Relays";

export type ToolbarProps = {
    onDownload: () => void,
    onCopy: () => void,
    showResponse: boolean,
    onChangeShowResponse: (showResponse: boolean) => void,
    gradient: GRADIENT,
    onGradientChange: (gradient: GRADIENT) => void,
    isDownloading: boolean,
    isCopying: boolean,
};

export function Toolbar({
    onDownload,
    onCopy,
    showResponse,
    onChangeShowResponse,
    gradient,
    onGradientChange,
    isDownloading,
    isCopying,
}: ToolbarProps) {

    const [ isRelayModalOpen, setIsRelayModalOpen ] = useState(false);

    return (
        <ToolbarContainer>
            <ToolbarListItem>
                <Tool aria-label="Gradient picker button">
                    <GradientPicker
                        gradient={gradient}
                        onGradientChange={onGradientChange}
                    />
                    <ColorTool $gradient={GRADIENTS[gradient]} />
                    <ToolName>Color</ToolName>
                </Tool>
            </ToolbarListItem>

            <ToolbarListItem>
                <Tool onClick={() => onChangeShowResponse(!showResponse)} aria-label="Stats toggle button">
                    <HeartIcon isSelected={showResponse} />
                    <ToolName>Stats</ToolName>
                </Tool>
            </ToolbarListItem>

            <ToolbarListItem>
                <RelaysToolContainer>
                    <Tool onClick={() => setIsRelayModalOpen(prev => !prev)} aria-label="Relays toggle button">
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
            </ToolbarListItem>

            <ToolbarListItem>
                <Divider />
            </ToolbarListItem>

            <ToolbarListItem>
                <Tool onClick={onCopy} aria-label="Copy button">
                    {
                        isCopying
                        ? <div className="loader"></div>
                        : <CopyIcon />
                    }
                    <ToolName>Copy</ToolName>
                </Tool>
            </ToolbarListItem>

            <ToolbarListItem>
                <Tool $withBackground onClick={onDownload} aria-label="Download button">
                    {
                        isDownloading
                        ? <div className="loader"></div>
                        : <DownloadIcon />
                    }
                    <ToolName>Download</ToolName>
                </Tool>
            </ToolbarListItem>
        </ToolbarContainer>
    )
}
