import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoUp from "../../assets/logo_up.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerCenter}>
        {/* Logo */}
        <div className={styles.logo}>
          <img src={logoUp} alt="Up Locações" />
        </div>

        {/* Institucional */}
        <section>
          <h3>Institucional</h3>
          <ul>
            <li>
              <Link to="/sobre">Sobre nós</Link>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
              >
                Seja um fornecedor
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
              >
                Entre em contato
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
              >
                Seja um colaborador
              </a>
            </li>
          </ul>
        </section>

        {/* Equipamentos */}
        <section>
          <h3>Equipamentos</h3>
          <ul>
            <li><Link to="/produtos">Andaimes</Link></li>
            <li><Link to="/produtos">Acesso e Elevação</Link></li>
            <li><Link to="/produtos">Compactação</Link></li>
            <li><Link to="/produtos">Concretagem</Link></li>
            <li><Link to="/produtos">Jardinagem</Link></li>
            <li><Link to="/produtos">Limpeza</Link></li>
            <li><Link to="/produtos">Ferramentas Elétricas</Link></li>
            <li><Link to="/produtos">Furação e Demolição</Link></li>
            <li><Link to="/produtos">Gerador, Bomba e Compressor</Link></li>
            <li><Link to="/produtos">Outros</Link></li>
          </ul>
        </section>

        {/* Redes sociais */}
        <section className={styles.redesSociais}>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/uplocacoesesteio"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/uplocacoes.esteio/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5551999134363"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </section>
      </div>

      {/* Subfooter */}
      <div className={styles.subFooter}>
        <p>
          Up Locações de Equipamentos &copy; {new Date().getFullYear()} Todos os direitos reservados -{" "}
          <span>
            <a href="https://outercode.com.br" target="_blank" rel="noreferrer">
              Outer Code Software Solutions
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
