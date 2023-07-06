import React from "react";
import styles from './Footer.module.scss'


function Footer() {
    return (
        <div className={styles.footer}>
            <hr/>
            <div id='about' className={styles.footer__about}>
                <div>
                    <p>
                        Катерина Семёнова
                    </p>
                </div>
                <div>
                    <p>Графический дизайнер с 6-летним опытом. В&nbsp;2017 году окончила Национальный Институт Дизайна
                        по&nbsp;направлению «Графический дизайн». Прошла курсы по&nbsp;айдентике и&nbsp;«Креативное мышление» в&nbsp;школе
                        BBE. На&nbsp;данный момент заканчиваю годовой курс «UX/UI: дизайн цифровых продуктов» в&nbsp;BBE.
                        Работаю
                        в&nbsp;крупной компании – индустрия кино и&nbsp;развлечений, сферы семейного отдыха
                        и&nbsp;гостеприимства, а&nbsp;также строительство жилья. Занимаюсь разработкой и&nbsp;поддержкой
                        фирменных стилей для&nbsp;отелей,
                        бизнес-центров, торговых центров и&nbsp;СОК «Чайка».
                    </p>
                </div>
            </div>

            <hr/>
            <div className={styles.footer__contacts}>
                <div>
                    <p>Контакты</p>
                </div>
                <div>
                    <p>+7 905 538 60 75</p>
                    <p> katerinasemenova93@gmail.com</p>
                    <p>@KateSemenovaV</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;