/**
 * @class jquery.searchable
 * @verson 0.1
 * @author Christopher D Langton <chris@codewiz.biz>
 * @classDescription text searchable DOM
 */
jQuery.fn.searchable = function(s){
    if (!this.length > 0 || "string" !== typeof s) return;
    jQuery.each(this,function(){
        var ele = this;
        jQuery(ele).after('<style id="'+ele.id+'"></style>');
        jQuery(ele).on('input', function() {
            if (!this.value) {
                jQuery('style#'+this.id).html("");
                return;
            }
            jQuery('style#'+ele.id).html("[data-searchable=\""+s+"\"]:not([data-index*=\"" + this.value.split(' ').join('').toLowerCase().replace('"', '\\"') + "\"]) { display: none; }");
        });
    });
};
