import Column from "./Column.js";

export default class Kanban {
    constructor(root) {
        this.root = root;

        Kanban.columns().forEach(column => {
            // Todo: create an inctance Column class
            const columnView = new Column(column.id, column.title);

            this.root.appendChild(columnView.elements.root)
        });
    }

    static columns() {
        return [
            {
                id: 1,
                title: "未完了"
            },
            {
                id: 2,
                title: "作業中"
            },
            {
                id: 3,
                title: "完了"
            },
        ];
    }
}