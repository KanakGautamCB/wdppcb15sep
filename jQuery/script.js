$('body')
    .append(
        $('<input>')
            .attr('placeholder','add task description')
            .addClass('input-box')
    )
    .append(
        $('<button></button>')
            .text('add task')
            .click(()=>{
                const li = $('<li></li>')
                const span =$('<span></span>').text($('.input-box').val())
                    li.append(
                        span
                    )
                    .append(
                        $('<button></button>')
                            .addClass('up')
                            .text('Up')
                            .click(()=>{
                                li.prev().before(li)
                            })
                    )
                    .append(
                        $('<button></button>')
                            .addClass('down')
                            .text('down')
                            .click(()=>{
                                li.next().after(li)
                            })
                    )
                    .append(
                        $('<button></button>')
                            .text('edit')
                            .addClass('edit')
                            .click(()=>{
                                const input = $('<input>').val(span.text())
                                span.replaceWith(input)
                                input.focus()
                                input.blur(()=>{
                                    span.text(input.val())
                                    input.replaceWith(span)
                                })


                            })
                    )
                    .append(
                        $('<button></button>')
                            .text('delete')
                            .addClass('delete')
                            .click(()=>{
                                li.remove()
                            })
                    )

                const taskList = $('.task-list').append(li)

                $('.input-box').val('')

            })
    )
    .append(
        $('<ul></ul>')
        .addClass('task-list')
    )

//$("body").append($("<input>").attr("placeholder","add task description").addClass("input-box")).append($("<button></button>").text("add task").click(()=>{let t=$("<li></li>"),e=$("<span></span>").text($(".input-box").val());t.append(e).append($("<button></button>").addClass("up").text("Up").click(()=>{t.prev().before(t)})).append($("<button></button>").addClass("down").text("down").click(()=>{t.next().after(t)})).append($("<button></button>").text("edit").addClass("edit").click(()=>{let t=$("<input>").val(e.text());e.replaceWith(t),t.focus(),t.blur(()=>{e.text(t.val()),t.replaceWith(e)})})).append($("<button></button>").text("delete").addClass("delete").click(()=>{t.remove()})),$(".task-list").append(t),$(".input-box").val("")})).append($("<ul></ul>").addClass("task-list"));