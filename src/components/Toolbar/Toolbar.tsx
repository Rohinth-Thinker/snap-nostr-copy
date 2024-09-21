import { Divider } from "../../shared/Global.styled";
import { CopyIcon, DownloadIcon, HeartIcon } from "../Icon/Icon";
import { ColorTool, Tool, ToolbarContainer, ToolName } from "./Toolbar.styled";

export type ToolbarProps = {
    onDownload: () => void,
};

export function Toolbar({
    onDownload,
}: ToolbarProps) {
    return (
        <ToolbarContainer>
            <Tool>
                <ColorTool />
                <ToolName>Color</ToolName>
            </Tool>

            <Tool>
                <HeartIcon />
                <ToolName>Response</ToolName>
            </Tool>

            {/* TODO: Add a button to configure relays */}

            <Divider />

            <Tool>
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