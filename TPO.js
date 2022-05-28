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
