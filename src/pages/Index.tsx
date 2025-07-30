import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">✨ Magic Events</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="absolute -top-10 -left-10 text-6xl animate-float">🎩</div>
            <div className="absolute -top-5 -right-10 text-4xl animate-sparkle">✨</div>
            <div className="absolute -bottom-5 left-5 text-3xl animate-glow">🪄</div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Магия на вашем празднике
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Профессиональный фокусник и ведущий праздничных мероприятий. 
            Создаю незабываемые моменты волшебства для детей и взрослых.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Calendar" className="mr-2" size={20} />
              Заказать выступление
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="Play" className="mr-2" size={20} />
              Посмотреть видео
            </Button>
          </div>
        </div>
        
        {/* Floating magical elements */}
        <div className="absolute top-1/4 left-10 text-4xl animate-float" style={{animationDelay: "1s"}}>🃏</div>
        <div className="absolute top-1/3 right-20 text-3xl animate-sparkle" style={{animationDelay: "2s"}}>⭐</div>
        <div className="absolute bottom-1/4 left-1/4 text-2xl animate-glow" style={{animationDelay: "3s"}}>🔮</div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Мои услуги</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-transform duration-300 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Фокусы и иллюзии</h3>
                <p className="text-muted-foreground mb-6">
                  Захватывающие фокусы с картами, монетами, и удивительные иллюзии, 
                  которые поразят воображение ваших гостей.
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎪</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Ведение праздников</h3>
                <p className="text-muted-foreground mb-6">
                  Профессиональное ведение детских дней рождения, корпоративов 
                  и семейных торжеств с магическими элементами.
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-transform duration-300 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Интерактивные шоу</h3>
                <p className="text-muted-foreground mb-6">
                  Вовлекающие программы с участием зрителей, 
                  мастер-классы по фокусам и магические квесты.
                </p>
                <Button variant="outline" className="w-full">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Портфолио</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={`/img/48ebb4f4-7406-4da9-99ea-9c9f6bd74edb.jpg`}
                alt="Выступление фокусника"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button>
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img 
                src={`/img/1fa3d2f3-baea-4fe1-8a5b-f056ffbb8cf4.jpg`}
                alt="Магические реквизиты"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button>
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть
                </Button>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
              <div className="w-full h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-lg font-semibold">Больше видео</p>
                  <p className="text-sm text-muted-foreground">на YouTube канале</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Невероятное шоу! Дети были в восторге, а взрослые не меньше. 
                  Профессионализм на высшем уровне!"
                </p>
                <div className="font-semibold">— Анна М.</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Заказывали на корпоратив. Коллеги до сих пор обсуждают фокусы. 
                  Обязательно пригласим снова!"
                </p>
                <div className="font-semibold">— Михаил К.</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "День рождения дочки прошёл волшебно! Спасибо за незабываемые эмоции!"
                </p>
                <div className="font-semibold">— Елена В.</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Базовая программа</h3>
                <div className="text-4xl font-bold mb-4">15 000 ₽</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    30 минут выступления
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Классические фокусы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    До 15 детей
                  </li>
                </ul>
                <Button className="w-full">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-primary scale-105 bg-primary/5">
              <CardContent className="p-8 text-center">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm mb-4">Популярно</div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Стандартная программа</h3>
                <div className="text-4xl font-bold mb-4">25 000 ₽</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    60 минут выступления
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Интерактивные фокусы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    До 25 детей
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Ведение праздника
                  </li>
                </ul>
                <Button className="w-full">Заказать</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-primary">Премиум программа</h3>
                <div className="text-4xl font-bold mb-4">40 000 ₽</div>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    90 минут выступления
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Иллюзии и спецэффекты
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Без ограничений по количеству
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="mr-2 text-primary" size={16} />
                    Мастер-класс по фокусам
                  </li>
                </ul>
                <Button className="w-full">Заказать</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Контакты</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-primary">Свяжитесь со мной</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Icon name="Phone" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Mail" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">magic@events.ru</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="MapPin" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Город</div>
                      <div className="text-muted-foreground">Москва</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="Clock" className="mr-4 text-primary" size={24} />
                    <div>
                      <div className="font-semibold">Время работы</div>
                      <div className="text-muted-foreground">Ежедневно 9:00 - 22:00</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-primary">Быстрая заявка</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <input 
                          type="text" 
                          className="w-full p-3 border border-border rounded-md bg-background"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <input 
                          type="tel" 
                          className="w-full p-3 border border-border rounded-md bg-background"
                          placeholder="+7 (999) 123-45-67"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                        <input 
                          type="date" 
                          className="w-full p-3 border border-border rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Комментарий</label>
                        <textarea 
                          className="w-full p-3 border border-border rounded-md bg-background h-24"
                          placeholder="Расскажите о вашем мероприятии"
                        />
                      </div>
                      <Button className="w-full">
                        <Icon name="Send" className="mr-2" size={16} />
                        Отправить заявку
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-primary mb-4">✨ Magic Events</div>
          <p className="text-muted-foreground mb-4">Создаём волшебство на ваших праздниках</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
            </a>
          </div>
          <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground">
            © 2024 Magic Events. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;