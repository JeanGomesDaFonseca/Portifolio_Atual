import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/FotoCapa.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, meu nome é Jean!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Sou um profissional formado na área administrativa como técnico e tenho experiência nas áreas de produção e recepção,
                onde pude aperfeiçoar minhas habilidades de comunicação e organização.
                Atualmente além de estudante de Sistema da Informação na Universidade Anhembi Morumbi e pela plataforma da Alura,
                também sou estagiário na empresa Dguests na função de Desenvolvedor Web "Front-End". Estou constantemente me atualizando e ampliando meus conhecimentos em React.js.
            </p>
            <p className={styles.paragrafo}>
                Dentre minhas características destaco a facilidade com softwares e hardwares,
                capacidade de adaptação, minha analítica em diferentes situações e o trabalho em equipe.
                Possuo conhecimento em React.js, Node.js, HTML semântico, CSS/SCSS responsivo, JavaScript/Typescript, Git/GitHub.</p>
            <p className={styles.paragrafo}>
                Sempre busco novos desafios e oportunidades para ampliar meus conhecimentos,
                a fim de me desenvolver cada vez mais e alcançar tanto o sucesso pessoal quanto profissional . </p>
        </PostModelo>
    )
}