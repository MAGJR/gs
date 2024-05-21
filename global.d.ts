type Messages = typeof import("./src/messages/en.json")
type PtMessages = typeof import("./src/messages/pt-BR.json")

declare interface IntlMessages extends Messages, PtMessages{}