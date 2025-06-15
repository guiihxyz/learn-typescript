// anotation, as e satisfies

type Footer = string | {
    text: string,
    iconURL?: string,
}

const footerA: Footer = "texto";
const footerB: Footer = "texto" as Footer;
const footerC: Footer = "texto" satisfies Footer;

//

type Cooldowns = Record<string, number>;

const cooldowns: Cooldowns = {
    gh: 20,
    dark: 50,
} satisfies Cooldowns;
