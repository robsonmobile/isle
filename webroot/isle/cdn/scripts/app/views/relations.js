define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){var r=new n,i=!1;e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i=!0);var s={fieldNames:{id:"hidId",name:"txtName"},itemName:"relation",order:[{col:"name"}],buildTable:function(n){var r="",i="<tbody>";e.each(n.items,function(n,s){r="",e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(r='<td><span role="button" tabindex="0" id="'+s.id+'" title="Edit"><i class="icon-edit"></i></span></td>'),i+="<tr>"+r+"<td>"+t.htmlEncode(t.abbreviate(s.name,50))+"</td></tr>"}),i+="</tbody>",e("#nodeTable").html(i)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=t.getObjects(n.items,"id",s)[0].name;e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.name+'"]').val(o)},duplicate:{field:"name",errorMsg:"That relation already exists"},rowsClickable:i};r.intialize(s)})})