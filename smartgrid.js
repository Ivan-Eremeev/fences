const smartgrid = require('smart-grid');
const settings = {
    filename: "smart-grid",
    outputStyle: "less",
    columns: 12,
    offset: "1.25%",
    mobileFirst: false,
    container: {
        maxWidth: "1230px",
        fields: "15px"
    },
    breakPoints: {
        lg: {
            width: "1200px"
        },
        md: {
            width: "992px",
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        }
    },
    mixinNames: {
        container: "wrapper",
        row: "row-flex",
        rowFloat: "row-float",
        rowInlineBlock: "row-ib",
        rowOffsets: "row-offsets",
        column: "col",
        size: "size",
        columnFloat: "col-float",
        columnInlineBlock: "col-ib",
        columnPadding: "col-padding",
        columnOffsets: "col-offsets",
        shift: "shift",
        from: "from",
        to: "to",
        fromTo: "from-to",
        reset: "reset",
        clearfix: "clearfix",
        debug: "debug"
    },
    tab: "    ",
    defaultMediaDevice: "screen",
    detailedCalc: false
};
smartgrid('./src/styles', settings);