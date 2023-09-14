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
                Sou um desenvolvedor Fullstack apaixonado por tecnologia e inovação, com experiência em todas as fases do ciclo de vida do
                desenvolvimento de software, desde a concepção até o lançamento. Tenho expertise em criar aplicações escaláveis e seguras,
                além de construir interfaces de usuário atraentes.
            </p>
            <p className={styles.paragrafo}>
                Ao longo da minha carreira, adquiri habilidades essenciais em comunicação, colaboração e resolução de problemas, o que me permite trabalhar
                de forma eficiente em equipe. Estou constantemente em busca de aprendizado e busco me atualizar com as mais recentes tecnologias e abordagens
                para aprimorar minhas habilidades e conhecimentos. Tenho grande entusiasmo em enfrentar projetos inovadores e desafiadores, onde posso aplicar minhas
                experiências e habilidades para criar soluções excepcionais.</p>
            <p className={styles.paragrafo}>
               Minhas habilidades técnicas incluem HTML, CSS, JavaScript, TypeScript, SQL, , AWS, Node, React, Styled-Components , SCSS, Bootstrap, etc... </br>
                Contatos: </br>
                jgomesfonseca21@gmail.com </br>
                +55 (11) 97803-5152. 
            </p>
        </PostModelo>
    )
}
