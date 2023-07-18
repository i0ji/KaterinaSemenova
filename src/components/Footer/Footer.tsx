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
                        и&nbsp;поддержкой фирменных стилей для&nbsp;отелей, бизнес-центров и&nbsp;торгвых центров.
                        Заканчиваю годовой
                        курс «UX/UI: дизайн цифровых продуктов» в&nbsp;BBE. Прошла курсы «Айдентика» и&nbsp;«Креативное
                        мышление»
                        в&nbsp;школе BBE. В&nbsp;2017 году получила высшее образование в&nbsp;Национальном Институте
                        Дизайна&nbsp;по&nbsp;направлению «Графический дизайн».
                    </article>

            </div>

            <hr/>
            <div
                className={styles.footer__contacts}
            >
                <h5>Контакты</h5>
                <div>
                    <p>+7 905 538 60 75</p>
                    <p>katerinasemenova93@gmail.com</p>
                    <p>@KateSemenovaV</p>
                </div>
            </div>
        </div>
    )
}