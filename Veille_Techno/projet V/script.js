document.addEventListener("DOMContentLoaded", function() {
            var options = {
                valueNames: ['thematique']
            };
            var articlesList = new List('articles', options);

            var filters = document.querySelectorAll('.filters a');

            filters.forEach((filter) => {
                filter.addEventListener('click', function(e){
                    var filterValue = this.getAttribute('data-filter');
                    e.preventDefault();
                    var filterSelected = document.querySelector('.filters .selected');
                    filterSelected.classList.remove('selected');
                    filter.classList.add('selected');
                    
                    articlesList.filter(function(item){
                        if(item.values().thematique == filterValue) {

                            return true;                        
                        } else if(filterValue == "all"){
                            articlesList.filter();
                            return false;
                        } else {
                            return false;
                        }
                    });
                    
                });
            })
     
        });