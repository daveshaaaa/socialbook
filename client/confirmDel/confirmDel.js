Template.confirmDel.events({
    'click .js-conDel'() {
        $("#conDelModal").modal("hide");
        let cId = $("#conid").val();
        $("#" + cId).fadeOut("slow", () => {
            socialdb.remove({
                "_id": cId
            });
        });
    }
});