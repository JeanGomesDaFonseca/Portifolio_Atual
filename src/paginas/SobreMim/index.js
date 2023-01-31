import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minhaFoto.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Jean!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Formado na área administrativa como técnico, tive oportunidades de conhecer as áreas de produção e recepção, onde pude aprimorar minhas habilidades de comunicação e organização.</p>
            <p className={styles.paragrafo}>
                Atualmente, estou estagiando na empresa Dguests como Desenvolvedor Web e Mobile "Front-End" e estou desenvolvendo meus conhecimentos cursando Sistema da Informação na Universidade Anhembi Morumbi e pela plataforma da Alura, por onde venho estudado com bastante frequência React.js. </p>
            <p className={styles.paragrafo}>
                Dentre outras características minhas, gostaria de destacar a facilidade com softwares e hardwares, a adaptabilidade, minha capacidade analítica em diferentes situações e o trabalho em equipe.             </p>
            <p className={styles.paragrafo}>
                Possuo conhecimento em ferramentas como:
            </p>
            <p className={styles.paragrafo}>
                - React.js,
                - Node.js,
                - HTML semântico,
                - CSS / SCSS responsivo,
                - JavaScript / Typescript,
                - Git / GitHub.

                #Front-End #React #JavaScript #HTML #CSS #SASS #Git #Gihub            </p>
        </PostModelo>
    )
}