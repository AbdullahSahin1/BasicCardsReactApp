import 'bulma/css/bulma.min.css';
import './App.css';
import  Course  from './Course';
import Node from './images/nodejs.png'
import Angular from './images/angularjs.jpg';
import React from './images/react.jpg';
import Vue from './images/vue.jpeg';
function App() {
  return (
    <div className="App">
    <section class="hero is-link">
  <div className="hero-body">
    <p className="title">
      En popüler JavaScript Frameworkleri
    </p>
    
  </div>
</section>
      <div className="container">
        <div className="columns">
          <div className="column">
            <Course 
            image={Node}
            title="Node JS"
            description="Node.js, açık kaynaklı, genelde sunucu tarafında çalışan ve ağ bağlantılı uygulamalar için geliştirilmiş bir çalıştırma ortamıdır. Node.js uygulamaları genelde istemci tarafı betik dili olan JavaScript kullanılarak geliştirilir."/>
          </div>
          <div className="column">
            <Course 
            image={Angular}  
            title="Angular JS"
            description="Angular, Google'daki Angular Ekibi, bireyler ve şirketler topluluğu tarafından yönetilen TypeScript tabanlı özgür ve açık kaynaklı bir web uygulaması çerçevesidir. Angular, AngularJS'yi oluşturan aynı ekibin eksiksiz bir yeniden yazma işlemidir."/>
          </div>
          <div className="column">
          <Course 
          image={React}
          title="React JS"
          description="React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir. Facebook önderliğinde bir geliştirici grubu tarafından geliştirilmekte olan React, Model-View-Controller prensibine uygun olarak oluşturulmuştur."/>
          </div>
          <div className="column">
          <Course 
          image={Vue}
          title="Vue JS"
           description="Vue.js kullanıcı arayüzleri ve tek sayfa uygulamalar inşa etmek için kullanılan açık kaynak Javascript iskeleti. 2013 yılında geliştirilmeye başlanan framework'ün güncel versiyonu 3.2'dir. 18 Eylül 2020'de yayımlanan 3. versiyonuyla kaynak kodu TypeScript ile yeniden yazılmıştır."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
