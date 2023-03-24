import './App.css';
import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
  Link,
  useParams,
} from "react-router-dom";

import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownDivider,
  MDBDropdownLink,
  MDBBtn,
} from 'mdb-react-ui-kit';

// Pages
import Home from './pages/home'

// Pages -> Curatorship
import Mision from './pages/curator/mision'
import Curator from './pages/curator/curator'
import Whatwedo from './pages/curator/whatwedo'
import Organization from './pages/curator/organization'
import Normogram from './pages/curator/normogram'
import { Kids } from './pages/curator/kids'
import Inclusivity from './pages/curator/inclusivity';
import NEWS from './pages/discharge/news';
import { Laws } from './pages/curator/normativity/laws';
import CERTIFICATE_WORKER from './pages/others/certification.page';
import { Transparency } from './pages/transparency/transparency';

// Pages -> Publications
//import Rules from './pages/normativity/rules'
import Administrative from './pages/discharge/administrative'

// Pages -> Discharge
import File from './pages/discharge/file'
import Status_Root from './pages/discharge/status_root';
import Status from './pages/discharge/status'
import Old from './pages/discharge/old'
import Search_root from './pages/discharge/search_root';
//import Nomenclature from './pages/discharge/nomenclature'

// Pages -> transparency
import PQRS from './pages/transparency/pqrs'
// PQRS
import FAQ from './pages/transparency/faq'
import School from './pages/transparency/school'
import Mailbox from './pages/transparency/mailbox'
import { Data } from './pages/transparency/data'

// Pages -> Liquidator
import Liquidator from './pages/liquidator/liquidator'
// Pages -> Scheduling
import Scheduling from './pages/scheduling/scheduling'

// Atuh and Login
//import Login from './pages/user/login'
import CustomsDataService from "./services/custom.service";
import DataSerive from './services/data.service'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// Components
import Footer from './components/footer'
import Title from './components/title'
import Navbar1 from './components/navbar'
import BtnStart from './components/btnStart'
import BtnChat from './components/btnChat'
import BtnAccesibiity from './components/btnAccesibility'

// Translations Services
import { useTranslation } from "react-i18next";
import "./translation/i18n";

// Dark Theme Services
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/theme';
import { fontZise1, fontZise2, fontZise3, fontZise4, fontZise5 } from './components/font';
import { GlobalStyles } from './components/global';


import ReCAPTCHA from 'react-google-recaptcha';
import { Resolutions } from './pages/curator/normativity/resolutions';
import { Decrees_nationals } from './pages/curator/normativity/decrees';
import { Decrees_mu } from './pages/curator/normativity/decrees_mu';
import { Entities } from './pages/ita/entities';
import { Reports } from './pages/ita/reports';
import { Open_data } from './pages/ita/open_data';
import PROFESIONALS_PUBLIC from './pages/others/public.page';
import PROFESIONALS_EMAIL from './pages/others/email.page';
import { Payments } from './pages/ita/Payments';
import { Policies } from './pages/curator/normativity/policies';
import { Participate } from './pages/ita/participate';


const MySwal = withReactContent(Swal);

export default function App() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState(3);
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  const changeFontsizePlus = () => {
    if (font >= 1 && font < 5) {
      setFont(font + 1);
    }
  }
  const changeFontsizeMinus = () => {
    if (font > 1 && font <= 5) {
      setFont(font - 1);
    }
  }


  return (
    <ProvideAuth>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} font={font == 5 ? fontZise1 : fontZise2}>
          <ThemeProvider theme={font === 5 ? fontZise5 : font === 4 ? fontZise4 : font === 3 ? fontZise3 : font === 2 ? fontZise2 : fontZise1} >
            <>
              <GlobalStyles />
              <div className="App">
                <BtnAccesibiity theme={theme} font={font} toggleTheme={toggleTheme}
                  changeFontsizePlus={changeFontsizePlus} changeFontsizeMinus={changeFontsizeMinus}
                  style={{ position: 'relative', zIndex: '3' }} />
                <BtnStart />
                <BtnChat translation={t("misc.btn_chat", { returnObjects: true })} />
                <div class="bg-image">
                  <div class="bg-image-gr">
                    <div class="container container-primary p-0">
                      <Route render={(props) => (
                        <Title {...props} translation={t("title", { returnObjects: true })}
                          swaMsg={t("swa_messages", { returnObjects: true })}
                          breadCrums={t("breadCrums", { returnObjects: true })} />
                      )} />
                      <Navbar1 />
                      <Switch>

                        <Route path='/home'
                          render={(props) => (
                            <Home {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })} />
                          )}
                        />

                        <Route path='/transparency'
                          render={(props) => (
                            <Transparency {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })} />
                          )}
                        />

                        <Route path='/mision'
                          render={(props) => (
                            <Mision {...props}
                              translation={t("curatorship.mision", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/curator'
                          render={(props) => (
                            <Curator {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/entities'
                          render={(props) => (
                            <Entities {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/reports'
                          render={(props) => (
                            <Reports {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/opendata'
                          render={(props) => (
                            <Open_data {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/payments'
                          render={(props) => (
                            <Payments {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/whatwedo'
                          render={(props) => (
                            <Whatwedo {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/organization'
                          render={(props) => (
                            <Organization {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/resolutions'
                          render={(props) => (
                            <Resolutions {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/normogram'
                          render={(props) => (
                            <Normogram {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/laws'
                          render={(props) => (
                            <Laws {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/decreesn'
                          render={(props) => (
                            <Decrees_nationals {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/decreesm'
                          render={(props) => (
                            <Decrees_mu {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/policies'
                          render={(props) => (
                            <Policies {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/kids'
                          render={(props) => (
                            <Kids {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/inclusivity'
                          render={(props) => (
                            <Inclusivity {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/administrative'
                          render={(props) => (
                            <Administrative {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />


                        <Route path='/file'
                          render={(props) => (
                            <File {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/status/:urlParams'
                          component={Status_Root}
                        />
                        <Route path='/status'
                          component={Status_Root}
                        />

                        <Route path='/search/:urlParams'
                          component={Search_root}
                        />
                        <Route path='/search'
                          component={Search_root}
                        />

                        <Route path='/old'
                          render={(props) => (
                            <Old {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/news'
                          render={(props) => (
                            <NEWS {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />


                        <Route path='/news/'
                          component={<NEWS />}
                        />


                        <Route path='/pqrs'
                          render={(props) => (
                            <PQRS {...props}
                              globals={t("globals", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                              translation_form={t("transparency.pqrs_form", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/faq'
                          render={(props) => (
                            <FAQ {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/school'
                          render={(props) => (
                            <School {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/mailbox'
                          render={(props) => (
                            <Mailbox {...props}
                              translation={t("transparency.mailbox", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/data'
                          render={(props) => (
                            <Data {...props}
                              translation={t("title", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/liquidator'
                          render={(props) => (
                            <Liquidator {...props} versioni={'2023'}
                              translation={t("liquidator.liquidator", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/scheduling'
                          render={(props) => (
                            <Scheduling {...props}
                              translation={t("scheduling.scheduling", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/login'
                          render={(props) => (
                            <LoginPage {...props}
                              translation={t("login", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />
                        <Route path='/certificacion'
                          render={(props) => (
                            <CERTIFICATE_WORKER {...props}
                              translation={t("login", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                        <Route path='/profesional/:urlParams'
                          component={PROFESIONALS_PUBLIC}
                        />

                        <Route path='/profesional/'
                          component={PROFESIONALS_EMAIL}
                        />

                        <Route path='/participate'
                          render={(props) => (
                            <Participate {...props}
                              translation={t("login", { returnObjects: true })}
                              swaMsg={t("swa_messages", { returnObjects: true })}
                              breadCrums={t("breadCrums", { returnObjects: true })}
                            />
                          )}
                        />

                      
                        <Route exact path='/'
                          render={(props) => (
                            <Home {...props}
                              translation={t("title", { returnObjects: true })} />
                          )}
                        />
                        <Route path='*' exact={true} component={Home} />
                      </Switch>
                      <Footer translation={t("footer", { returnObjects: true })} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          </ThemeProvider>
        </ThemeProvider>
      </Router>
    </ProvideAuth>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser(DataSerive.getUserData());
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      DataSerive.setUserNull();
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}



function LoginPage() {
  let sha256 = require('js-sha256');
  const { t } = useTranslation();
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();
  const recaptchaRef = React.createRef();

  let credentials = {
    email: '',
    password: '',
  }
  var formData = new FormData();

  let { from } = { from: { pathname: "/dashboard" } };

  let handleSubmit = (event) => {
    event.preventDefault();

    recaptchaRef.current.execute().then(response => {
      CustomsDataService.appLogin(formData)
        .then(response => {
          if (response.data.length == 1) {
            let userInfo = {};
            userInfo.name = response.data[0].name;
            userInfo.surname = response.data[0].surname;
            userInfo.role = response.data[0].role.name;
            userInfo.role_short = response.data[0].role.short;
            userInfo.roleDesc = response.data[0].role.desc;
            userInfo.active = response.data[0].active;
            userInfo.roleId = response.data[0].roleId;
            userInfo.id = response.data[0].id;
            userInfo.name_short = response.data[0].name + ' ' + response.data[0].surname;
            userInfo.name_full = response.data[0].name + ' ' + response.data[0].name_2 + ' ' + response.data[0].surname + ' ' + response.data[0].surname_2;
            DataSerive.setUser(userInfo);
            login();
          } else {
            MySwal.fire({
              title: <h2>CERTIFICACION FALLIDA</h2>,
              text: 'Hubo un error de acceso a la aplicación',
              footer: 'Revise sus credenciales e intentelo nuevamente',
              icon: 'error',
              confirmButtonText: 'CONTINUAR',
            })
          }
        })
        .catch(e => {
          console.log(e);
        });
    }).catch(e => {
      console.log(e);
    });;


  };

  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };


  return (
    <div className="Login">
      <div className="row my-4 d-flex justify-content-center">
        <div className="col-lg-8 col-md-12">
          <h2 className="text-center my-4">{t('login.str_title')}</h2>
          <br />
          <p className="text-center">You must log in to view the page at this page</p>
          <div className="d-flex justify-content-center">
            <div className="bg-card w-50">
              <div class="card-body">
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="email" class="form-label">{t('login.str_user')}</label>
                    <input type="email" class="form-control" id="email"
                      onChange={(e) => formData.set('email', e.target.value)} />
                  </div>
                  <div class="mb-3">
                    <label for="password" class="form-label">{t('login.str_pass')}</label>
                    <input type="password" class="form-control" id="password"
                      onChange={(e) => formData.set('password', sha256(e.target.value))} />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <button type="submit" class="btn text-white" style={{ backgroundColor: '#2651A8' }}>{t('login.str_btn')}</button>
                  </div>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.REACT_APP_GOOGLE_CAPTCHA_HTML}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
