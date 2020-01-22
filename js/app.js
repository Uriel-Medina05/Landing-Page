// Portfolio section start
var pItems = document.getElementById("portfolioItems"), mItems = document.getElementById("portfolioModals");
var portfolioItems = [], modalItems = [];

var items = [
    {
        name: 'soccer',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      name: 'americanfutball',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      name: 'basketball',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      name: 'baseball',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      name: 'volleyball',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
      name: 'tennis',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

];


for(var i = 0; i < items.length; i++){
    portfolioItems.push(`
         <div class="col-md-6 col-lg-4">
            <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#modal${i+1}">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img id="portfolio" class="img-fluid rounded-lg" src="img/${items[i].name}.JPG" alt="${items[i].name}">
            </div>
        </div>
`);
    modalItems.push(
        `
        <div class="portfolio-modal modal fade" id="modal${i+1}" tabindex="-1" role="dialog" aria-labelledby="portfolioModal${i+1}Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">
                <i class="fa fa-times"></i>
              </span>
            </button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <!--  Modal - Title -->
                    <h2 class="portfolio-modal-title text-secondary text-uppercase mt-2 mb-3">${items[i].name}</h2>

                    <!-- Icon Divider -->
                    <div class="divider-custom mt-2 mb-4">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                      <i class="fa fa-trophy"></i>
                      </div>
                    <div class="divider-custom-line"></div>
                    </div>

                    <!-- Modal - Image -->
                    <img class="img-fluid rounded mb-5" src="img/${items[i].name}.JPG" alt="${items[i].name}>
                    <!-- Modal - Text -->

                    <p class="mb-5 text-justify">${items[i].desc}</p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal">
                      <i class="fa fa-times fa-fw"></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    );
}

pItems.innerHTML = portfolioItems.join('');
mItems.innerHTML = modalItems.join('');
