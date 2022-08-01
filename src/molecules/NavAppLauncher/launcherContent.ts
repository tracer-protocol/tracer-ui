import TracerSVG from "../../assets/tracer/tracer_logo.svg";
import PoolsSVG from "../../assets/tracer/tracer_perpetual_pools_stacked.svg";
import TracerBlogSVG from "../../assets/tracer/tracer_blog.svg";
import DiscourseSVG from "../../assets/launcher/discourse.svg";
import SnapshotSVG from "../../assets/launcher/snapshot.svg";
import GitbookSVG from "../../assets/launcher/gitbook.svg";
import GithubSVG from "../../assets/launcher/github.svg";
import TwitterSVG from "../../assets/launcher/twitter.svg";
import DiscordSVG from "../../assets/launcher/discord.svg";

export const appButtonContent = [
    {
        link: "https://tracer.finance",
        LogoImage: TracerSVG,
        bgImage: "/launcher/tracer_bg.png",
        alt: "Tracer logo",
    },
    {
        link: "https://pools.tracer.finance",
        LogoImage: PoolsSVG,
        bgImage: "/launcher/tracer_bg.png",
        alt: "Tracer Perpetual Pools logo",
    },
];

export const governanceContent = [
    {
        link: "https://discourse.tracer.finance/",
        LogoImage: DiscourseSVG,
        alt: "Discourse logo",
        label: "Forum",
    },
    {
        link: "https://snapshot.org/#/tracer.eth",
        LogoImage: SnapshotSVG,
        alt: "Snapshot logo",
        label: "Voting",
    },
];

export const linkContent = [
    {
        link: "https://github.com/tracer-protocol",
        LogoImage: GithubSVG,
        alt: "Github logo",
        label: "Github",
    },
    {
        link: "https://docs.tracer.finance/tracer-docs-portal/readme",
        LogoImage: GitbookSVG,
        alt: "Gitbook logo",
        label: "Documentation",
    },
    {
        link: "https://tracer.finance/radar",
        LogoImage: TracerBlogSVG,
        alt: "Tracer Blog logo",
    },
];

export const socialLinkContent = [
    {
        link: "https://twitter.com/TracerDAO",
        LogoImage: TwitterSVG,
        alt: "Twitter logo",
    },
    {
        link: "https://discord.com/invite/tracerdao",
        LogoImage: DiscordSVG,
        alt: "Discord logo",
    },
];
