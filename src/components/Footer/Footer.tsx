import React from "react";
import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <div className={styles.footer}>

            <hr/>

            <div id='about'
                 className={styles.footer__about}
            >
                <h5>Катерина Семёнова</h5>
                <article>Графический дизайнер с&nbsp;6-летним опытом. На&nbsp;данный момент занимаюсь разработкой
                    и&nbsp;поддержкой фирменных стилей, созданием Key Visual, POSm-&nbsp;материалов, полиграфической
                    продукции
                    для&nbsp;отелей, бизнес-центров и&nbsp;торговых центров.<br/>
                    <br/>
                    Прошла годовой курс «UX/UI: дизайн цифровых
                    продуктов» в&nbsp;школе BBE, а&nbsp;так&nbsp;же&nbsp;курсы «Айдентика» и&nbsp;«Креативное
                    мышление».
                    В&nbsp;2017 году получила высшее
                    образование в&nbsp;Национальном Институте Дизайна по&nbsp;направлению «Графический дизайн».
                </article>

            </div>

            <hr/>
            <div
                className={styles.footer__contacts}
            >
                <h5>Контакты</h5>
                <div>
                    <p><a href="tel:+79055386075">+7 905 538 60 75</a></p>
                    <p><a href="mailto:katerinasemenova93@gmail.com">katerinasemenova93@gmail.com</a></p>
                    <p><a href="https://t.me/KateSemenovaV">KateSemenovaV</a></p>
                </div>
            </div>
        </div>
    )
}