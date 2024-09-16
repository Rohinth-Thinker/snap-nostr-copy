import { Divider } from "../../shared/Global.styled";
import { CopyIcon, DownloadIcon, HeartIcon } from "../Icon/Icon";
import { ColorTool, Tool, ToolbarContainer, ToolName } from "./Toolbar.styled";

export function Toolbar() {
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

            <Divider />

            <Tool>
                <CopyIcon />
                <ToolName>Copy</ToolName>
            </Tool>

            <Tool $withBackground>
                <DownloadIcon />
                <ToolName>Download</ToolName>
            </Tool>
        </ToolbarContainer>
    )
}