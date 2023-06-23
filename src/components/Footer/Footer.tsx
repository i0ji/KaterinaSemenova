import React from "react";
import styles from './Footer.module.scss'


function Footer() {
    return (
        <div className={styles.footer}>
            <hr/>
            <div id='about' className={styles.footer__about}>
                <div>
                    <p>
                        Екатерина Семёнова
                    </p>
                </div>
                <div>
                    <p>Графический дизайнер с 6-летним опытом. В 2017 году окончила Национальный Институт Дизайна по
                        направлению «Графический дизайн». Прошла курсы по айдентике и курс «Креативное мышление» в школе
                        BBE. На данный момент заканчиваю годовой курс «UX/UI: дизайн цифровых продуктов» в BBE. Работаю
                        в крупной компаниии – индустрия кино <br/>и развлечений, сферы семейного отдыха и гостеприимства, а
                        также строительство жилья. Занимаюсь разработкой и поддержкой фирменных стилей для отелей,
                        бизнес-центров, торгвых центров и СОК «Чайка».
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

export default Footer