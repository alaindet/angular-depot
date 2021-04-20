export class StaticContextError extends Error {
  constructor(message: string) {
    super(message);
  }
}

export class StaticContextReducerNotFound extends StaticContextError {
  constructor(message: string) {
    super(message);
  }
}

export class StaticContextSelectorNotFound extends StaticContextError {
  constructor(message: string) {
    super(message);
  }
}
