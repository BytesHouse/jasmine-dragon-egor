import tea from '../../../../../src/assets/Images/tea.png';
import living from '../../../../../src/assets/Images/living-room.png';
import community from '../../../../../src/assets/Images/community.png';

const SectionTwo = () => {
    return (
        <div className="grid grid-cols-1 mt-16">
            <div className="flex items-center mt-100 flex-col flex-wrap h-[2015px]">
                <div className="subsec2-1">
                    <img id="img1subsec2-1" src={tea} alt="tea"/>
                    <h1 className="h1sec2-1">Наша Миссия</h1>
                    <p className="p1sec2-1">Наша миссия - распространять культуру чаепития, даря каждому возможность
                        наслаждаться великолепными чайными вкусами и ароматами. Мы стремимся поддерживать экологически
                        чистые производственные процессы и создавать устойчивые отношения с нашими поставщиками. Наша
                        миссия
                        - привносить радость и удовольствие через чай.</p>
                </div>
                <div id="subsec2-1margin" className="subsec2-1">
                    <img src={living} alt="app"/>
                    <h1 className="h1sec2-1">Чайная</h1>
                    <p className="p1sec2-1">В нашей чайной вы найдете вдохновляющее сочетание традиций и современности.
                        Мы
                        предлагаем широкий ассортимент чая, включая классические сорта, редкие экземпляры и эксклюзивные
                        ароматизированные смеси. В каждой чашке нашего чая - неповторимый вкус и аромат, который
                        перенесет
                        вас в мир чайных традиций и великолепия.</p>
                </div>
                <div id="middlesubsec2-1" className="subsec2-1">
                    <img src={community} alt="people"/>
                    <h1 className="h1sec2-1">Наша команда</h1>
                    <p className="p1sec2-1">В нашей команде собраны настоящие ценители и знатоки чая, готовые поделиться
                        своими
                        знаниями и опытом с вами. Мы стремимся к тому, чтобы каждый клиент получил не только
                        высококачественные продукты, но и отличное обслуживание. Наша команда готова помочь вам в выборе
                        чая
                        и создании незабываемого чайного опыта.</p>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;