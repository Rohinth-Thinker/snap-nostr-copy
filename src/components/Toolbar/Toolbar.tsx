import { Divider } from "../../shared/Global.styled";
import { CopyIcon, DownloadIcon, HeartIcon } from "../Icon/Icon";
import { ColorTool, Tool, ToolbarContainer, ToolName } from "./Toolbar.styled";

export type ToolbarProps = {
    onDownload: () => void,
    onCopy: () => void,
    showResponse: boolean,
    onChangeShowResponse: (showResponse: boolean) => void,
};

export function Toolbar({
    onDownload,
    onCopy,
    showResponse,
    onChangeShowResponse,
}: ToolbarProps) {
    return (
        <ToolbarContainer>
            <Tool>
                <ColorTool />
                <ToolName>Color</ToolName>
            </Tool>

            <Tool onClick={() => onChangeShowResponse(!showResponse)}>
                <HeartIcon isSelected={showResponse} />
                <ToolName>Response</ToolName>
            </Tool>

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