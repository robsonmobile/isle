define(["jquery","../Util","../NodeManager"],function(e,t,n){e(function(){var r=new n,i=!1;e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(i=!0);var s={fieldNames:{id:"hidId",name:"txtName",parent:"txtParent"},limit:500,tree:!0,order:[{col:"name"}],itemName:"category",itemNamePlural:"categories",buildTable:function(n){function f(i,l){if(i!=""){u="",a=1;while(a<l+1)a%l==0?u+="-&nbsp;&nbsp;":u+="&nbsp;&nbsp;&nbsp;",a++;o=n.items[i],r="",e("html").attr("data-role")>=ISLE_CONTRIBUTOR&&(r='<td><span role="button" tabindex="0" id="'+o.id+'" title="Edit"><i class="icon-edit"></i></span></td>'),e("#nodeTable").append("<tr>"+r+"<td>"+u+t.htmlEncode(t.abbreviate(o.name))+"</td></tr>")}e.isArray(s[i])&&e.each(s[i],function(e,t){f(t,l+1)});return}var r="";e("#nodeTable").html("");var i=[],s=n.parents,o="",u="",a=0;f("",-1)},modalInit:function(n){var r='<option value="">-- Select a parent</option>';e.each(n.items,function(e,n){r+='<option value="'+n.id+'">'+t.htmlEncode(t.abbreviate(n.name))+"</option>"}),e('#modalDialog select[name="'+this.fieldNames.parent+'"]').html(r)},fillForm:function(n,r,i){var s=e(i).attr("id"),o=n.items[s],u=o.name,a=o.parent,f=n.items[a],l="";typeof f!="undefined"&&(l=f.name),e('#modalDialog input[name="'+this.fieldNames.id+'"]').val(s),e('#modalDialog input[name="'+this.fieldNames.name+'"]').val(u);var c='<option value="">-- Select a parent</option>',h=[];t.getDescendants(s,h,n.parents),e.each(n.items,function(n,r){r["id"]!=s&&e.inArray(r.id,h)<0&&(c+='<option value="'+r.id+'">'+t.htmlEncode(t.abbreviate(r.name))+"</option>")}),e('#modalDialog select[name="'+this.fieldNames.parent+'"]').html(c).val(a),e("#modalDialog .ui-combobox input").val(l)},duplicate:{field:"name",errorMsg:"That name already exists"},rowsClickable:i};r.intialize(s),e("#"+s.fieldNames.parent).combobox()})})