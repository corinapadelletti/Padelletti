function validacion() 
        {
            valor = document.getElementsById('campo').value;
            
            if( valor == null || valor.length == 0) 
            {
                
                document.getElementById('mensaje').innerHTML = '*Este campo es obligatorio';
                elemento = document.getElementById('campo');
                elemento.focus();
                
                return false;
            }
            return true;          
        }

        function validacion() 
        {
            indice = document.getElementById('opciones').selectedIndex;
            
            if( indice == null || indice == 0 ) 
            {
                document.getElementById('mensaje').innerHTML = "Tenes que seleccionar una provincia";
                return false;
            }
            
            return true;          
        }

        // {
        //     valor = document.getElementsById("apellido").value;
            
        //     if( valor == null || valor.length == 0) 
        //     {
                
        //         document.getElementById('mensaje').innerHTML = "Tenes que completar el Apellido!";
        //         elemento = document.getElementById('apellido');
        //         elemento.focus();
                
        //         return false;
        //     }
        //     return true;          
        // }

        // {
        //     valor = document.getElementsById("mail").value;
            
        //     if( valor == null || valor.length == 0) 
        //     {
                
        //         document.getElementById('mensaje').innerHTML = "Tenes que completar el Mail!";
        //         elemento = document.getElementById('nombre');
        //         elemento.focus();
                
        //         return false;
        //     }
        //     return true;          
        // }

        // {
        //     valor = document.getElementsById("consulta").value;
            
        //     if( valor == null || valor.length == 0) 
        //     {
                
        //         document.getElementById('mensaje').innerHTML = "Tenes que completar la Consulta!";
        //         elemento = document.getElementById('nombre');
        //         elemento.focus();
                
        //         return false;
        //     }
        //     return true;          
        // }


        const iconoMenu = document.querySelector('#icomo-menu'),
        menu = document.querySelector ('menu');
        
        iconoMenu.addEventListener('click', (e) => { 
        
            menu.classList.toggle('active');
            document.body.classList.toggle('opacity');
        
            const rutaActual = e.target.getAttribute('src:')
        
            if(rutaActual  == 'menu.png'){ 
                e.target.setAttribute('src', 'menu.png'):
            }else{
                e.target.setAttribute('src', 'menu.png'):
            }
        })
        
        
        // const iconoMenu = document.querySelector("#header-logo"),
        // menu = document.querySelector ("menu");
        
        // iconoMenu.addEventListener("click", (e) => { 
        
        //     menu.classList.toggle("active");
        //     document.body.classList.toggle("opacity");
        
        //     const rutaActual = e.target.getAttribute("src:")
        
        //     if(rutaActual  == "logo eei.jpg"){ 
        //         e.target.setAttribute("src", "logo eei.jpg"):
        //     }else{
        //         e.target.setAtrinute("src", "logo eei.jpg"):
        //     }
        // })