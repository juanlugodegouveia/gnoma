// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#registros').DataTable({
    'pageLength': 10,
    'paging': true,
    'language': {
      paginate: {
        next: 'Siguiente',
        previous: 'Anterior',
        last: 'Último',
        first: 'Primero',  
      },
      info: 'Mostrando _START_ a _END_ de _TOTAL_ resultados',
      emptyTable: 'No hay registros',
      infoEmpty: '0 Registros',
      search: 'Buscar',
      lengthMenu: "Mostrando _MENU_ entradas"
    }
  });
});
