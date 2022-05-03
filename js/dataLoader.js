const fetchJson = async () => {
    try {
        const data = await fetch("/js/data.json");
        return await data.json();
    } catch (error) {
        console.log(error);
    }
};

window.onload = function () {
    setProduct();
};

function setProduct(value) {
    document.getElementById('Gasoline').innerHTML = `
                  <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/products/2-lineUp/Gasoline/Kappa1.0.png" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Kappa 1.0</h3>
                    <p class="ts-designation">GASOLINE</p>
                    <p class="ts-description">77ps/6,200rpm
                      <br>9.6kg·m/3,500rpm
                      <br>998cc</p>
                   <!--/ social-icons-->
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 1 end -->

              <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team2.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Angela Lyouer</h3>
                    <p class="ts-designation">Innovation Officer</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                    <!--/ social-icons-->
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 2 end -->

              <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team3.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Mark Conter</h3>
                    <p class="ts-designation">Safety Officer</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 3 end -->

              <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team4.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Ayesha Stewart</h3>
                    <p class="ts-designation">Finance Officer</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 4 end -->

              <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team5.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Dave Clarkte</h3>
                    <p class="ts-designation">Civil Engineer</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 5 end -->

              <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team6.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">Elton Joe</h3>
                    <p class="ts-designation">Site Supervisor</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                  </div>
                </div><!--/ Team wrapper end -->
              </div><!-- Team 6 end -->`;
}

function getTemplateForItem(value){
    let template = '';
    value.forEach(v => {
        template += `
                  <div class="item">
                <div class="ts-team-wrapper">
                  <div class="team-img-wrapper">
                    <img loading="lazy" class="w-100" src="images/team/team6.jpg" alt="team-img">
                  </div>
                  <div class="ts-team-content">
                    <h3 class="ts-name">${v['Engine'][0]}</h3>
                    <p class="ts-designation">Site Supervisor</p>
                    <p class="ts-description">Nats Stenman began his career in construction with boots on the ground</p>
                  </div>
                </div>
              </div>
`
    })
    return template;
}

