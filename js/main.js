$(function(){


    /*--------------------------------------------
        Funcoines para el menu principal
    ---------------------------------------------*/

    

    // apuntamos al elemento a modificar
    $('#menu-nav .navbar-toggler').click(function(){
        // toggle clas agrega o elimina elementos o alternar 
        $('.boton-menu').toggleClass('icono-cerrar');

    });


    // al hacer click en un enlace del menu principal
    $('#menu-nav .navbar-nav a').click(function(){

        // elimina la clase icono cerrar
        $('.boton-menu').removeClass('icono-cerrar')
        // contraemos el menu
        $('#menu-nav .navbar-collapse').collapse('hide')

    })



    // iniciando el swiper instanciando

    var swiper = new Swiper('#animacion',{
        // parametros para los botones de navegacion
        navigation:{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
        },
        loop:true,
        // botones de pagination
        pagination:{
            el:'.swiper-pagination',
            type:'bullets', /* tipo de paginacion */
            clickable: true,
            
        },
        speed:600,
        effect:'fade',
        grabCursor:true, /* el cursor toma forma de manito */

        // animacion de forma automatica
        autoplay:{
            delay:3000
        },

        // eventos para la opcion del teclado
        keyboard:{
            enabled:true,
            onlyInViewport:true  /* para q cuando funcione solo cuando se vea el enlace */
        }
    })


    // Iniciando script venobox.. colocamos el elemnto disparador
    $('.venobox-video').venobox({
        overlayClose:true, /* aser que no se cierre con los alrededores */
        bgcolor:'#000', /* color del contenedor del video */
        //border:'10px', 
        //closeBackground:'#000',
        //closeColor:'#fff'
        // overlayColor:'rgba(0,0,0,1.0)' /* color de fondo  */
        share:[],
        spinner:'cube-grid',
        titleattr:'Clinica Dental',
        titleColor:'#fff'
    })



    // Iniciando script counterup
    $('.counter').counterUp()

    // Inicialisamos el script datepicker picker.date.js
    $('.datepicker').pickadate({
        // traduccion de ingles a español
        monthsFull: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
        monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
        weekdaysFull: [ 'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado' ],
        weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
        today: 'Hoy',
        clear: 'Limpiar',
        close: '',
        
        // etiquetas de acceso, traduccion
        labelMonthNext: 'Siguiente mes',
        labelMonthPrev: 'Anterior mes',
        labelMonthSelect: 'Seleccione un mes',
        labelYearSelect: 'Seleccione un año',
        // botones de formato
        firstDay: 1,
        format: 'dddd, d !de mmmm !de yyyy', /* formato para el usuario  CARACTERES ESPECIALES LE METEMOS ! */
        formatSubmit: 'dd/mm/yyyy', //FORMATO PARA EL SERVIDOR
        // selector de añop y mes
        selectYears: false, //2 muestra un año antes y uno despues
        selectMonths: true,
        // elegimos fechas habilitadas en el date
        min: true, //mes 0 es enero con 10 o -10 se elige fechas anteriores y posteriores //con true asemos q n se seleccione fechas atras
        max: 30,

        // funcion para el dia actual
        onStart: function(){
            var date= new Date();
            this.set('select',[date.getFullYear(), date.getMonth(), date.getDate()])
        }
    })

    // Configuracion del timepicker
    $('.timepicker').pickatime({
        clear:'Borrar',
        format: 'hh:i A', //formato para el usuario
        interval:60, //intervalo entre li
        min:[8,0],
        max:[18,0]
       
    })




    // Validaciones con parsley
    $('#mi-formulario').parsley({
        // remplazamos las clases parsley-error y sucess por clases de validacion de bootstrap is-valid y is-invalid
        errorClass: 'is-invalid text-danger',
        successClass: 'is-valid',
        // opdemos modificar la estructura y elementos de lista del error por defecto de parsley
        errorsWrapper: '<ul class="list-unstyled text-danger mb-0 mt-1 small"></ul>',
        errorTemplate: '<li></li>',

        // solucion de campos que no se actualizan
        trigger:'change',
        triggerAfterFailure:'change'
        // lansan los validadores cada ves que un campo cambie su valor
    })


    // stickit para fijo de nav
    $('#menu-nav').stickit({
        className: 'menu-fijo',
    });




    // 7. page-scroll-to-id inicializando
    $('#menu-principal a').mPageScroll2id({
        // distancia entre la parte superior y el destino
        offset:50,
        // Establece el nombre de la clase para el enlace resaltado (actual) (predeterminado:) mPS2id-highlight.
        highlightClass: "active"
    })


}) 