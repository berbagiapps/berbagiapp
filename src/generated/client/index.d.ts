
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model termsCondition
 * 
 */
export type termsCondition = $Result.DefaultSelection<Prisma.$termsConditionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model DonationRequest
 * 
 */
export type DonationRequest = $Result.DefaultSelection<Prisma.$DonationRequestPayload>
/**
 * Model PhotoDonation
 * 
 */
export type PhotoDonation = $Result.DefaultSelection<Prisma.$PhotoDonationPayload>
/**
 * Model DonationFulfillment
 * 
 */
export type DonationFulfillment = $Result.DefaultSelection<Prisma.$DonationFulfillmentPayload>
/**
 * Model DonationRequestment
 * 
 */
export type DonationRequestment = $Result.DefaultSelection<Prisma.$DonationRequestmentPayload>
/**
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatRoomMember
 * 
 */
export type ChatRoomMember = $Result.DefaultSelection<Prisma.$ChatRoomMemberPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model FundDonationHistory
 * 
 */
export type FundDonationHistory = $Result.DefaultSelection<Prisma.$FundDonationHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  OPEN: 'OPEN',
  FULFILLED: 'FULFILLED',
  CANCELLED: 'CANCELLED',
  REQUESTED: 'REQUESTED',
  FULFILLING: 'FULFILLING',
  CONFIRMED: 'CONFIRMED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TermsConditions
 * const termsConditions = await prisma.termsCondition.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TermsConditions
   * const termsConditions = await prisma.termsCondition.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.termsCondition`: Exposes CRUD operations for the **termsCondition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsConditions
    * const termsConditions = await prisma.termsCondition.findMany()
    * ```
    */
  get termsCondition(): Prisma.termsConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationRequest`: Exposes CRUD operations for the **DonationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationRequests
    * const donationRequests = await prisma.donationRequest.findMany()
    * ```
    */
  get donationRequest(): Prisma.DonationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photoDonation`: Exposes CRUD operations for the **PhotoDonation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PhotoDonations
    * const photoDonations = await prisma.photoDonation.findMany()
    * ```
    */
  get photoDonation(): Prisma.PhotoDonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationFulfillment`: Exposes CRUD operations for the **DonationFulfillment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationFulfillments
    * const donationFulfillments = await prisma.donationFulfillment.findMany()
    * ```
    */
  get donationFulfillment(): Prisma.DonationFulfillmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationRequestment`: Exposes CRUD operations for the **DonationRequestment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationRequestments
    * const donationRequestments = await prisma.donationRequestment.findMany()
    * ```
    */
  get donationRequestment(): Prisma.DonationRequestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoomMember`: Exposes CRUD operations for the **ChatRoomMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRoomMembers
    * const chatRoomMembers = await prisma.chatRoomMember.findMany()
    * ```
    */
  get chatRoomMember(): Prisma.ChatRoomMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fundDonationHistory`: Exposes CRUD operations for the **FundDonationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundDonationHistories
    * const fundDonationHistories = await prisma.fundDonationHistory.findMany()
    * ```
    */
  get fundDonationHistory(): Prisma.FundDonationHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    termsCondition: 'termsCondition',
    Notification: 'Notification',
    Campaign: 'Campaign',
    DonationRequest: 'DonationRequest',
    PhotoDonation: 'PhotoDonation',
    DonationFulfillment: 'DonationFulfillment',
    DonationRequestment: 'DonationRequestment',
    Token: 'Token',
    User: 'User',
    ChatRoom: 'ChatRoom',
    ChatRoomMember: 'ChatRoomMember',
    Chat: 'Chat',
    FundDonationHistory: 'FundDonationHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "termsCondition" | "notification" | "campaign" | "donationRequest" | "photoDonation" | "donationFulfillment" | "donationRequestment" | "token" | "user" | "chatRoom" | "chatRoomMember" | "chat" | "fundDonationHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      termsCondition: {
        payload: Prisma.$termsConditionPayload<ExtArgs>
        fields: Prisma.termsConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.termsConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.termsConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          findFirst: {
            args: Prisma.termsConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.termsConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          findMany: {
            args: Prisma.termsConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>[]
          }
          create: {
            args: Prisma.termsConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          createMany: {
            args: Prisma.termsConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.termsConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>[]
          }
          delete: {
            args: Prisma.termsConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          update: {
            args: Prisma.termsConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          deleteMany: {
            args: Prisma.termsConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.termsConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.termsConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>[]
          }
          upsert: {
            args: Prisma.termsConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$termsConditionPayload>
          }
          aggregate: {
            args: Prisma.TermsConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermsCondition>
          }
          groupBy: {
            args: Prisma.termsConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermsConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.termsConditionCountArgs<ExtArgs>
            result: $Utils.Optional<TermsConditionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      DonationRequest: {
        payload: Prisma.$DonationRequestPayload<ExtArgs>
        fields: Prisma.DonationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          findFirst: {
            args: Prisma.DonationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          findMany: {
            args: Prisma.DonationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>[]
          }
          create: {
            args: Prisma.DonationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          createMany: {
            args: Prisma.DonationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>[]
          }
          delete: {
            args: Prisma.DonationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          update: {
            args: Prisma.DonationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          deleteMany: {
            args: Prisma.DonationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>[]
          }
          upsert: {
            args: Prisma.DonationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestPayload>
          }
          aggregate: {
            args: Prisma.DonationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationRequest>
          }
          groupBy: {
            args: Prisma.DonationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<DonationRequestCountAggregateOutputType> | number
          }
        }
      }
      PhotoDonation: {
        payload: Prisma.$PhotoDonationPayload<ExtArgs>
        fields: Prisma.PhotoDonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoDonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoDonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          findFirst: {
            args: Prisma.PhotoDonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoDonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          findMany: {
            args: Prisma.PhotoDonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>[]
          }
          create: {
            args: Prisma.PhotoDonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          createMany: {
            args: Prisma.PhotoDonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoDonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>[]
          }
          delete: {
            args: Prisma.PhotoDonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          update: {
            args: Prisma.PhotoDonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoDonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoDonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>[]
          }
          upsert: {
            args: Prisma.PhotoDonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoDonationPayload>
          }
          aggregate: {
            args: Prisma.PhotoDonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhotoDonation>
          }
          groupBy: {
            args: Prisma.PhotoDonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoDonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoDonationCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoDonationCountAggregateOutputType> | number
          }
        }
      }
      DonationFulfillment: {
        payload: Prisma.$DonationFulfillmentPayload<ExtArgs>
        fields: Prisma.DonationFulfillmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFulfillmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFulfillmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          findFirst: {
            args: Prisma.DonationFulfillmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFulfillmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          findMany: {
            args: Prisma.DonationFulfillmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>[]
          }
          create: {
            args: Prisma.DonationFulfillmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          createMany: {
            args: Prisma.DonationFulfillmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationFulfillmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>[]
          }
          delete: {
            args: Prisma.DonationFulfillmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          update: {
            args: Prisma.DonationFulfillmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          deleteMany: {
            args: Prisma.DonationFulfillmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationFulfillmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationFulfillmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>[]
          }
          upsert: {
            args: Prisma.DonationFulfillmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationFulfillmentPayload>
          }
          aggregate: {
            args: Prisma.DonationFulfillmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationFulfillment>
          }
          groupBy: {
            args: Prisma.DonationFulfillmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationFulfillmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationFulfillmentCountArgs<ExtArgs>
            result: $Utils.Optional<DonationFulfillmentCountAggregateOutputType> | number
          }
        }
      }
      DonationRequestment: {
        payload: Prisma.$DonationRequestmentPayload<ExtArgs>
        fields: Prisma.DonationRequestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationRequestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationRequestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          findFirst: {
            args: Prisma.DonationRequestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationRequestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          findMany: {
            args: Prisma.DonationRequestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>[]
          }
          create: {
            args: Prisma.DonationRequestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          createMany: {
            args: Prisma.DonationRequestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationRequestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>[]
          }
          delete: {
            args: Prisma.DonationRequestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          update: {
            args: Prisma.DonationRequestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          deleteMany: {
            args: Prisma.DonationRequestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationRequestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationRequestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>[]
          }
          upsert: {
            args: Prisma.DonationRequestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationRequestmentPayload>
          }
          aggregate: {
            args: Prisma.DonationRequestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationRequestment>
          }
          groupBy: {
            args: Prisma.DonationRequestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationRequestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationRequestmentCountArgs<ExtArgs>
            result: $Utils.Optional<DonationRequestmentCountAggregateOutputType> | number
          }
        }
      }
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatRoomMember: {
        payload: Prisma.$ChatRoomMemberPayload<ExtArgs>
        fields: Prisma.ChatRoomMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          findMany: {
            args: Prisma.ChatRoomMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          create: {
            args: Prisma.ChatRoomMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          createMany: {
            args: Prisma.ChatRoomMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          update: {
            args: Prisma.ChatRoomMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomMemberPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoomMember>
          }
          groupBy: {
            args: Prisma.ChatRoomMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomMemberCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      FundDonationHistory: {
        payload: Prisma.$FundDonationHistoryPayload<ExtArgs>
        fields: Prisma.FundDonationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundDonationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundDonationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          findFirst: {
            args: Prisma.FundDonationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundDonationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          findMany: {
            args: Prisma.FundDonationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>[]
          }
          create: {
            args: Prisma.FundDonationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          createMany: {
            args: Prisma.FundDonationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundDonationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>[]
          }
          delete: {
            args: Prisma.FundDonationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          update: {
            args: Prisma.FundDonationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.FundDonationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundDonationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundDonationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.FundDonationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundDonationHistoryPayload>
          }
          aggregate: {
            args: Prisma.FundDonationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundDonationHistory>
          }
          groupBy: {
            args: Prisma.FundDonationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundDonationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundDonationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<FundDonationHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    termsCondition?: termsConditionOmit
    notification?: NotificationOmit
    campaign?: CampaignOmit
    donationRequest?: DonationRequestOmit
    photoDonation?: PhotoDonationOmit
    donationFulfillment?: DonationFulfillmentOmit
    donationRequestment?: DonationRequestmentOmit
    token?: TokenOmit
    user?: UserOmit
    chatRoom?: ChatRoomOmit
    chatRoomMember?: ChatRoomMemberOmit
    chat?: ChatOmit
    fundDonationHistory?: FundDonationHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DonationRequestCountOutputType
   */

  export type DonationRequestCountOutputType = {
    photoDonations: number
    fulfillments: number
    chatRooms: number
    donationRequestments: number
  }

  export type DonationRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoDonations?: boolean | DonationRequestCountOutputTypeCountPhotoDonationsArgs
    fulfillments?: boolean | DonationRequestCountOutputTypeCountFulfillmentsArgs
    chatRooms?: boolean | DonationRequestCountOutputTypeCountChatRoomsArgs
    donationRequestments?: boolean | DonationRequestCountOutputTypeCountDonationRequestmentsArgs
  }

  // Custom InputTypes
  /**
   * DonationRequestCountOutputType without action
   */
  export type DonationRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestCountOutputType
     */
    select?: DonationRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DonationRequestCountOutputType without action
   */
  export type DonationRequestCountOutputTypeCountPhotoDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoDonationWhereInput
  }

  /**
   * DonationRequestCountOutputType without action
   */
  export type DonationRequestCountOutputTypeCountFulfillmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationFulfillmentWhereInput
  }

  /**
   * DonationRequestCountOutputType without action
   */
  export type DonationRequestCountOutputTypeCountChatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }

  /**
   * DonationRequestCountOutputType without action
   */
  export type DonationRequestCountOutputTypeCountDonationRequestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationRequestmentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    readMessages: number
    rooms: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    readMessages?: boolean | UserCountOutputTypeCountReadMessagesArgs
    rooms?: boolean | UserCountOutputTypeCountRoomsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    members: number
    chats: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatRoomCountOutputTypeCountMembersArgs
    chats?: boolean | ChatRoomCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    readBy: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readBy?: boolean | ChatCountOutputTypeCountReadByArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountReadByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model termsCondition
   */

  export type AggregateTermsCondition = {
    _count: TermsConditionCountAggregateOutputType | null
    _min: TermsConditionMinAggregateOutputType | null
    _max: TermsConditionMaxAggregateOutputType | null
  }

  export type TermsConditionMinAggregateOutputType = {
    id: string | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsConditionMaxAggregateOutputType = {
    id: string | null
    userid: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TermsConditionCountAggregateOutputType = {
    id: number
    userid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TermsConditionMinAggregateInputType = {
    id?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsConditionMaxAggregateInputType = {
    id?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TermsConditionCountAggregateInputType = {
    id?: true
    userid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TermsConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which termsCondition to aggregate.
     */
    where?: termsConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of termsConditions to fetch.
     */
    orderBy?: termsConditionOrderByWithRelationInput | termsConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: termsConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` termsConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` termsConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned termsConditions
    **/
    _count?: true | TermsConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsConditionMaxAggregateInputType
  }

  export type GetTermsConditionAggregateType<T extends TermsConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsCondition[P]>
      : GetScalarType<T[P], AggregateTermsCondition[P]>
  }




  export type termsConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: termsConditionWhereInput
    orderBy?: termsConditionOrderByWithAggregationInput | termsConditionOrderByWithAggregationInput[]
    by: TermsConditionScalarFieldEnum[] | TermsConditionScalarFieldEnum
    having?: termsConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsConditionCountAggregateInputType | true
    _min?: TermsConditionMinAggregateInputType
    _max?: TermsConditionMaxAggregateInputType
  }

  export type TermsConditionGroupByOutputType = {
    id: string
    userid: string
    createdAt: Date
    updatedAt: Date
    _count: TermsConditionCountAggregateOutputType | null
    _min: TermsConditionMinAggregateOutputType | null
    _max: TermsConditionMaxAggregateOutputType | null
  }

  type GetTermsConditionGroupByPayload<T extends termsConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsConditionGroupByOutputType[P]>
            : GetScalarType<T[P], TermsConditionGroupByOutputType[P]>
        }
      >
    >


  export type termsConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsCondition"]>

  export type termsConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsCondition"]>

  export type termsConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["termsCondition"]>

  export type termsConditionSelectScalar = {
    id?: boolean
    userid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type termsConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "createdAt" | "updatedAt", ExtArgs["result"]["termsCondition"]>

  export type $termsConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "termsCondition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userid: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["termsCondition"]>
    composites: {}
  }

  type termsConditionGetPayload<S extends boolean | null | undefined | termsConditionDefaultArgs> = $Result.GetResult<Prisma.$termsConditionPayload, S>

  type termsConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<termsConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermsConditionCountAggregateInputType | true
    }

  export interface termsConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['termsCondition'], meta: { name: 'termsCondition' } }
    /**
     * Find zero or one TermsCondition that matches the filter.
     * @param {termsConditionFindUniqueArgs} args - Arguments to find a TermsCondition
     * @example
     * // Get one TermsCondition
     * const termsCondition = await prisma.termsCondition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends termsConditionFindUniqueArgs>(args: SelectSubset<T, termsConditionFindUniqueArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermsCondition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {termsConditionFindUniqueOrThrowArgs} args - Arguments to find a TermsCondition
     * @example
     * // Get one TermsCondition
     * const termsCondition = await prisma.termsCondition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends termsConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, termsConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsCondition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionFindFirstArgs} args - Arguments to find a TermsCondition
     * @example
     * // Get one TermsCondition
     * const termsCondition = await prisma.termsCondition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends termsConditionFindFirstArgs>(args?: SelectSubset<T, termsConditionFindFirstArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsCondition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionFindFirstOrThrowArgs} args - Arguments to find a TermsCondition
     * @example
     * // Get one TermsCondition
     * const termsCondition = await prisma.termsCondition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends termsConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, termsConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermsConditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsConditions
     * const termsConditions = await prisma.termsCondition.findMany()
     * 
     * // Get first 10 TermsConditions
     * const termsConditions = await prisma.termsCondition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsConditionWithIdOnly = await prisma.termsCondition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends termsConditionFindManyArgs>(args?: SelectSubset<T, termsConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermsCondition.
     * @param {termsConditionCreateArgs} args - Arguments to create a TermsCondition.
     * @example
     * // Create one TermsCondition
     * const TermsCondition = await prisma.termsCondition.create({
     *   data: {
     *     // ... data to create a TermsCondition
     *   }
     * })
     * 
     */
    create<T extends termsConditionCreateArgs>(args: SelectSubset<T, termsConditionCreateArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermsConditions.
     * @param {termsConditionCreateManyArgs} args - Arguments to create many TermsConditions.
     * @example
     * // Create many TermsConditions
     * const termsCondition = await prisma.termsCondition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends termsConditionCreateManyArgs>(args?: SelectSubset<T, termsConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermsConditions and returns the data saved in the database.
     * @param {termsConditionCreateManyAndReturnArgs} args - Arguments to create many TermsConditions.
     * @example
     * // Create many TermsConditions
     * const termsCondition = await prisma.termsCondition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermsConditions and only return the `id`
     * const termsConditionWithIdOnly = await prisma.termsCondition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends termsConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, termsConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermsCondition.
     * @param {termsConditionDeleteArgs} args - Arguments to delete one TermsCondition.
     * @example
     * // Delete one TermsCondition
     * const TermsCondition = await prisma.termsCondition.delete({
     *   where: {
     *     // ... filter to delete one TermsCondition
     *   }
     * })
     * 
     */
    delete<T extends termsConditionDeleteArgs>(args: SelectSubset<T, termsConditionDeleteArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermsCondition.
     * @param {termsConditionUpdateArgs} args - Arguments to update one TermsCondition.
     * @example
     * // Update one TermsCondition
     * const termsCondition = await prisma.termsCondition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends termsConditionUpdateArgs>(args: SelectSubset<T, termsConditionUpdateArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermsConditions.
     * @param {termsConditionDeleteManyArgs} args - Arguments to filter TermsConditions to delete.
     * @example
     * // Delete a few TermsConditions
     * const { count } = await prisma.termsCondition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends termsConditionDeleteManyArgs>(args?: SelectSubset<T, termsConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsConditions
     * const termsCondition = await prisma.termsCondition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends termsConditionUpdateManyArgs>(args: SelectSubset<T, termsConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsConditions and returns the data updated in the database.
     * @param {termsConditionUpdateManyAndReturnArgs} args - Arguments to update many TermsConditions.
     * @example
     * // Update many TermsConditions
     * const termsCondition = await prisma.termsCondition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermsConditions and only return the `id`
     * const termsConditionWithIdOnly = await prisma.termsCondition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends termsConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, termsConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermsCondition.
     * @param {termsConditionUpsertArgs} args - Arguments to update or create a TermsCondition.
     * @example
     * // Update or create a TermsCondition
     * const termsCondition = await prisma.termsCondition.upsert({
     *   create: {
     *     // ... data to create a TermsCondition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsCondition we want to update
     *   }
     * })
     */
    upsert<T extends termsConditionUpsertArgs>(args: SelectSubset<T, termsConditionUpsertArgs<ExtArgs>>): Prisma__termsConditionClient<$Result.GetResult<Prisma.$termsConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermsConditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionCountArgs} args - Arguments to filter TermsConditions to count.
     * @example
     * // Count the number of TermsConditions
     * const count = await prisma.termsCondition.count({
     *   where: {
     *     // ... the filter for the TermsConditions we want to count
     *   }
     * })
    **/
    count<T extends termsConditionCountArgs>(
      args?: Subset<T, termsConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermsConditionAggregateArgs>(args: Subset<T, TermsConditionAggregateArgs>): Prisma.PrismaPromise<GetTermsConditionAggregateType<T>>

    /**
     * Group by TermsCondition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {termsConditionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends termsConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: termsConditionGroupByArgs['orderBy'] }
        : { orderBy?: termsConditionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, termsConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the termsCondition model
   */
  readonly fields: termsConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for termsCondition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__termsConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the termsCondition model
   */
  interface termsConditionFieldRefs {
    readonly id: FieldRef<"termsCondition", 'String'>
    readonly userid: FieldRef<"termsCondition", 'String'>
    readonly createdAt: FieldRef<"termsCondition", 'DateTime'>
    readonly updatedAt: FieldRef<"termsCondition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * termsCondition findUnique
   */
  export type termsConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter, which termsCondition to fetch.
     */
    where: termsConditionWhereUniqueInput
  }

  /**
   * termsCondition findUniqueOrThrow
   */
  export type termsConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter, which termsCondition to fetch.
     */
    where: termsConditionWhereUniqueInput
  }

  /**
   * termsCondition findFirst
   */
  export type termsConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter, which termsCondition to fetch.
     */
    where?: termsConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of termsConditions to fetch.
     */
    orderBy?: termsConditionOrderByWithRelationInput | termsConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for termsConditions.
     */
    cursor?: termsConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` termsConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` termsConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of termsConditions.
     */
    distinct?: TermsConditionScalarFieldEnum | TermsConditionScalarFieldEnum[]
  }

  /**
   * termsCondition findFirstOrThrow
   */
  export type termsConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter, which termsCondition to fetch.
     */
    where?: termsConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of termsConditions to fetch.
     */
    orderBy?: termsConditionOrderByWithRelationInput | termsConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for termsConditions.
     */
    cursor?: termsConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` termsConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` termsConditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of termsConditions.
     */
    distinct?: TermsConditionScalarFieldEnum | TermsConditionScalarFieldEnum[]
  }

  /**
   * termsCondition findMany
   */
  export type termsConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter, which termsConditions to fetch.
     */
    where?: termsConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of termsConditions to fetch.
     */
    orderBy?: termsConditionOrderByWithRelationInput | termsConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing termsConditions.
     */
    cursor?: termsConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` termsConditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` termsConditions.
     */
    skip?: number
    distinct?: TermsConditionScalarFieldEnum | TermsConditionScalarFieldEnum[]
  }

  /**
   * termsCondition create
   */
  export type termsConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * The data needed to create a termsCondition.
     */
    data: XOR<termsConditionCreateInput, termsConditionUncheckedCreateInput>
  }

  /**
   * termsCondition createMany
   */
  export type termsConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many termsConditions.
     */
    data: termsConditionCreateManyInput | termsConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * termsCondition createManyAndReturn
   */
  export type termsConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * The data used to create many termsConditions.
     */
    data: termsConditionCreateManyInput | termsConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * termsCondition update
   */
  export type termsConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * The data needed to update a termsCondition.
     */
    data: XOR<termsConditionUpdateInput, termsConditionUncheckedUpdateInput>
    /**
     * Choose, which termsCondition to update.
     */
    where: termsConditionWhereUniqueInput
  }

  /**
   * termsCondition updateMany
   */
  export type termsConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update termsConditions.
     */
    data: XOR<termsConditionUpdateManyMutationInput, termsConditionUncheckedUpdateManyInput>
    /**
     * Filter which termsConditions to update
     */
    where?: termsConditionWhereInput
    /**
     * Limit how many termsConditions to update.
     */
    limit?: number
  }

  /**
   * termsCondition updateManyAndReturn
   */
  export type termsConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * The data used to update termsConditions.
     */
    data: XOR<termsConditionUpdateManyMutationInput, termsConditionUncheckedUpdateManyInput>
    /**
     * Filter which termsConditions to update
     */
    where?: termsConditionWhereInput
    /**
     * Limit how many termsConditions to update.
     */
    limit?: number
  }

  /**
   * termsCondition upsert
   */
  export type termsConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * The filter to search for the termsCondition to update in case it exists.
     */
    where: termsConditionWhereUniqueInput
    /**
     * In case the termsCondition found by the `where` argument doesn't exist, create a new termsCondition with this data.
     */
    create: XOR<termsConditionCreateInput, termsConditionUncheckedCreateInput>
    /**
     * In case the termsCondition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<termsConditionUpdateInput, termsConditionUncheckedUpdateInput>
  }

  /**
   * termsCondition delete
   */
  export type termsConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
    /**
     * Filter which termsCondition to delete.
     */
    where: termsConditionWhereUniqueInput
  }

  /**
   * termsCondition deleteMany
   */
  export type termsConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which termsConditions to delete
     */
    where?: termsConditionWhereInput
    /**
     * Limit how many termsConditions to delete.
     */
    limit?: number
  }

  /**
   * termsCondition without action
   */
  export type termsConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the termsCondition
     */
    select?: termsConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the termsCondition
     */
    omit?: termsConditionOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    notification: string | null
    uuid: string | null
    userid: string | null
    notifType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    notification: string | null
    uuid: string | null
    userid: string | null
    notifType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    notification: number
    uuid: number
    userid: number
    notifType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    notification?: true
    uuid?: true
    userid?: true
    notifType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    notification?: true
    uuid?: true
    userid?: true
    notifType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    notification?: true
    uuid?: true
    userid?: true
    notifType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    notification: string
    uuid: string | null
    userid: string
    notifType: string
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification?: boolean
    uuid?: boolean
    userid?: boolean
    notifType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification?: boolean
    uuid?: boolean
    userid?: boolean
    notifType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    notification?: boolean
    uuid?: boolean
    userid?: boolean
    notifType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    notification?: boolean
    uuid?: boolean
    userid?: boolean
    notifType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "notification" | "uuid" | "userid" | "notifType" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      notification: string
      uuid: string | null
      userid: string
      notifType: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly notification: FieldRef<"Notification", 'String'>
    readonly uuid: FieldRef<"Notification", 'String'>
    readonly userid: FieldRef<"Notification", 'String'>
    readonly notifType: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
  }


  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignAvgAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type CampaignSumAggregateOutputType = {
    targetAmount: number | null
    currentAmount: number | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    targetAmount: number | null
    currentAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorFirebaseId: string | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    targetAmount: number | null
    currentAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorFirebaseId: string | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    title: number
    description: number
    targetAmount: number
    currentAmount: number
    createdAt: number
    updatedAt: number
    creatorFirebaseId: number
    _all: number
  }


  export type CampaignAvgAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type CampaignSumAggregateInputType = {
    targetAmount?: true
    currentAmount?: true
  }

  export type CampaignMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    createdAt?: true
    updatedAt?: true
    creatorFirebaseId?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    createdAt?: true
    updatedAt?: true
    creatorFirebaseId?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    targetAmount?: true
    currentAmount?: true
    createdAt?: true
    updatedAt?: true
    creatorFirebaseId?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampaignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampaignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _avg?: CampaignAvgAggregateInputType
    _sum?: CampaignSumAggregateInputType
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    title: string
    description: string
    targetAmount: number
    currentAmount: number
    createdAt: Date
    updatedAt: Date
    creatorFirebaseId: string
    _count: CampaignCountAggregateOutputType | null
    _avg: CampaignAvgAggregateOutputType | null
    _sum: CampaignSumAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorFirebaseId?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorFirebaseId?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorFirebaseId?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    targetAmount?: boolean
    currentAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorFirebaseId?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "targetAmount" | "currentAmount" | "createdAt" | "updatedAt" | "creatorFirebaseId", ExtArgs["result"]["campaign"]>

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      targetAmount: number
      currentAmount: number
      createdAt: Date
      updatedAt: Date
      creatorFirebaseId: string
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly title: FieldRef<"Campaign", 'String'>
    readonly description: FieldRef<"Campaign", 'String'>
    readonly targetAmount: FieldRef<"Campaign", 'Float'>
    readonly currentAmount: FieldRef<"Campaign", 'Float'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
    readonly creatorFirebaseId: FieldRef<"Campaign", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
  }


  /**
   * Model DonationRequest
   */

  export type AggregateDonationRequest = {
    _count: DonationRequestCountAggregateOutputType | null
    _avg: DonationRequestAvgAggregateOutputType | null
    _sum: DonationRequestSumAggregateOutputType | null
    _min: DonationRequestMinAggregateOutputType | null
    _max: DonationRequestMaxAggregateOutputType | null
  }

  export type DonationRequestAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    itemWeight: number | null
  }

  export type DonationRequestSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    itemWeight: number | null
  }

  export type DonationRequestMinAggregateOutputType = {
    id: string | null
    namaBarang: string | null
    requestorFirebaseId: string | null
    requestorName: string | null
    donationType: string | null
    detailBarang: string | null
    alasanDonasi: string | null
    locationDescription: string | null
    latitude: number | null
    longitude: number | null
    city: string | null
    description: string | null
    itemType: string | null
    itemWeight: number | null
    weightUnit: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    expiredAt: Date | null
  }

  export type DonationRequestMaxAggregateOutputType = {
    id: string | null
    namaBarang: string | null
    requestorFirebaseId: string | null
    requestorName: string | null
    donationType: string | null
    detailBarang: string | null
    alasanDonasi: string | null
    locationDescription: string | null
    latitude: number | null
    longitude: number | null
    city: string | null
    description: string | null
    itemType: string | null
    itemWeight: number | null
    weightUnit: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    expiredAt: Date | null
  }

  export type DonationRequestCountAggregateOutputType = {
    id: number
    namaBarang: number
    requestorFirebaseId: number
    requestorName: number
    donationType: number
    detailBarang: number
    alasanDonasi: number
    locationDescription: number
    latitude: number
    longitude: number
    city: number
    description: number
    itemType: number
    itemWeight: number
    weightUnit: number
    status: number
    createdAt: number
    updatedAt: number
    expiredAt: number
    _all: number
  }


  export type DonationRequestAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    itemWeight?: true
  }

  export type DonationRequestSumAggregateInputType = {
    latitude?: true
    longitude?: true
    itemWeight?: true
  }

  export type DonationRequestMinAggregateInputType = {
    id?: true
    namaBarang?: true
    requestorFirebaseId?: true
    requestorName?: true
    donationType?: true
    detailBarang?: true
    alasanDonasi?: true
    locationDescription?: true
    latitude?: true
    longitude?: true
    city?: true
    description?: true
    itemType?: true
    itemWeight?: true
    weightUnit?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
  }

  export type DonationRequestMaxAggregateInputType = {
    id?: true
    namaBarang?: true
    requestorFirebaseId?: true
    requestorName?: true
    donationType?: true
    detailBarang?: true
    alasanDonasi?: true
    locationDescription?: true
    latitude?: true
    longitude?: true
    city?: true
    description?: true
    itemType?: true
    itemWeight?: true
    weightUnit?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
  }

  export type DonationRequestCountAggregateInputType = {
    id?: true
    namaBarang?: true
    requestorFirebaseId?: true
    requestorName?: true
    donationType?: true
    detailBarang?: true
    alasanDonasi?: true
    locationDescription?: true
    latitude?: true
    longitude?: true
    city?: true
    description?: true
    itemType?: true
    itemWeight?: true
    weightUnit?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    expiredAt?: true
    _all?: true
  }

  export type DonationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationRequest to aggregate.
     */
    where?: DonationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequests to fetch.
     */
    orderBy?: DonationRequestOrderByWithRelationInput | DonationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationRequests
    **/
    _count?: true | DonationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationRequestMaxAggregateInputType
  }

  export type GetDonationRequestAggregateType<T extends DonationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationRequest[P]>
      : GetScalarType<T[P], AggregateDonationRequest[P]>
  }




  export type DonationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationRequestWhereInput
    orderBy?: DonationRequestOrderByWithAggregationInput | DonationRequestOrderByWithAggregationInput[]
    by: DonationRequestScalarFieldEnum[] | DonationRequestScalarFieldEnum
    having?: DonationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationRequestCountAggregateInputType | true
    _avg?: DonationRequestAvgAggregateInputType
    _sum?: DonationRequestSumAggregateInputType
    _min?: DonationRequestMinAggregateInputType
    _max?: DonationRequestMaxAggregateInputType
  }

  export type DonationRequestGroupByOutputType = {
    id: string
    namaBarang: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType: string | null
    detailBarang: string | null
    alasanDonasi: string | null
    locationDescription: string
    latitude: number | null
    longitude: number | null
    city: string | null
    description: string
    itemType: string
    itemWeight: number | null
    weightUnit: string | null
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    expiredAt: Date | null
    _count: DonationRequestCountAggregateOutputType | null
    _avg: DonationRequestAvgAggregateOutputType | null
    _sum: DonationRequestSumAggregateOutputType | null
    _min: DonationRequestMinAggregateOutputType | null
    _max: DonationRequestMaxAggregateOutputType | null
  }

  type GetDonationRequestGroupByPayload<T extends DonationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], DonationRequestGroupByOutputType[P]>
        }
      >
    >


  export type DonationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaBarang?: boolean
    requestorFirebaseId?: boolean
    requestorName?: boolean
    donationType?: boolean
    detailBarang?: boolean
    alasanDonasi?: boolean
    locationDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    description?: boolean
    itemType?: boolean
    itemWeight?: boolean
    weightUnit?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
    photoDonations?: boolean | DonationRequest$photoDonationsArgs<ExtArgs>
    fulfillments?: boolean | DonationRequest$fulfillmentsArgs<ExtArgs>
    chatRooms?: boolean | DonationRequest$chatRoomsArgs<ExtArgs>
    donationRequestments?: boolean | DonationRequest$donationRequestmentsArgs<ExtArgs>
    _count?: boolean | DonationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationRequest"]>

  export type DonationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaBarang?: boolean
    requestorFirebaseId?: boolean
    requestorName?: boolean
    donationType?: boolean
    detailBarang?: boolean
    alasanDonasi?: boolean
    locationDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    description?: boolean
    itemType?: boolean
    itemWeight?: boolean
    weightUnit?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
  }, ExtArgs["result"]["donationRequest"]>

  export type DonationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    namaBarang?: boolean
    requestorFirebaseId?: boolean
    requestorName?: boolean
    donationType?: boolean
    detailBarang?: boolean
    alasanDonasi?: boolean
    locationDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    description?: boolean
    itemType?: boolean
    itemWeight?: boolean
    weightUnit?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
  }, ExtArgs["result"]["donationRequest"]>

  export type DonationRequestSelectScalar = {
    id?: boolean
    namaBarang?: boolean
    requestorFirebaseId?: boolean
    requestorName?: boolean
    donationType?: boolean
    detailBarang?: boolean
    alasanDonasi?: boolean
    locationDescription?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    description?: boolean
    itemType?: boolean
    itemWeight?: boolean
    weightUnit?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiredAt?: boolean
  }

  export type DonationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "namaBarang" | "requestorFirebaseId" | "requestorName" | "donationType" | "detailBarang" | "alasanDonasi" | "locationDescription" | "latitude" | "longitude" | "city" | "description" | "itemType" | "itemWeight" | "weightUnit" | "status" | "createdAt" | "updatedAt" | "expiredAt", ExtArgs["result"]["donationRequest"]>
  export type DonationRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photoDonations?: boolean | DonationRequest$photoDonationsArgs<ExtArgs>
    fulfillments?: boolean | DonationRequest$fulfillmentsArgs<ExtArgs>
    chatRooms?: boolean | DonationRequest$chatRoomsArgs<ExtArgs>
    donationRequestments?: boolean | DonationRequest$donationRequestmentsArgs<ExtArgs>
    _count?: boolean | DonationRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DonationRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DonationRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DonationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationRequest"
    objects: {
      photoDonations: Prisma.$PhotoDonationPayload<ExtArgs>[]
      fulfillments: Prisma.$DonationFulfillmentPayload<ExtArgs>[]
      chatRooms: Prisma.$ChatRoomPayload<ExtArgs>[]
      donationRequestments: Prisma.$DonationRequestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      namaBarang: string | null
      requestorFirebaseId: string
      requestorName: string
      donationType: string | null
      detailBarang: string | null
      alasanDonasi: string | null
      locationDescription: string
      latitude: number | null
      longitude: number | null
      city: string | null
      description: string
      itemType: string
      itemWeight: number | null
      weightUnit: string | null
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
      expiredAt: Date | null
    }, ExtArgs["result"]["donationRequest"]>
    composites: {}
  }

  type DonationRequestGetPayload<S extends boolean | null | undefined | DonationRequestDefaultArgs> = $Result.GetResult<Prisma.$DonationRequestPayload, S>

  type DonationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationRequestCountAggregateInputType | true
    }

  export interface DonationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationRequest'], meta: { name: 'DonationRequest' } }
    /**
     * Find zero or one DonationRequest that matches the filter.
     * @param {DonationRequestFindUniqueArgs} args - Arguments to find a DonationRequest
     * @example
     * // Get one DonationRequest
     * const donationRequest = await prisma.donationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationRequestFindUniqueArgs>(args: SelectSubset<T, DonationRequestFindUniqueArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationRequestFindUniqueOrThrowArgs} args - Arguments to find a DonationRequest
     * @example
     * // Get one DonationRequest
     * const donationRequest = await prisma.donationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestFindFirstArgs} args - Arguments to find a DonationRequest
     * @example
     * // Get one DonationRequest
     * const donationRequest = await prisma.donationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationRequestFindFirstArgs>(args?: SelectSubset<T, DonationRequestFindFirstArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestFindFirstOrThrowArgs} args - Arguments to find a DonationRequest
     * @example
     * // Get one DonationRequest
     * const donationRequest = await prisma.donationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationRequests
     * const donationRequests = await prisma.donationRequest.findMany()
     * 
     * // Get first 10 DonationRequests
     * const donationRequests = await prisma.donationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationRequestWithIdOnly = await prisma.donationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationRequestFindManyArgs>(args?: SelectSubset<T, DonationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationRequest.
     * @param {DonationRequestCreateArgs} args - Arguments to create a DonationRequest.
     * @example
     * // Create one DonationRequest
     * const DonationRequest = await prisma.donationRequest.create({
     *   data: {
     *     // ... data to create a DonationRequest
     *   }
     * })
     * 
     */
    create<T extends DonationRequestCreateArgs>(args: SelectSubset<T, DonationRequestCreateArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationRequests.
     * @param {DonationRequestCreateManyArgs} args - Arguments to create many DonationRequests.
     * @example
     * // Create many DonationRequests
     * const donationRequest = await prisma.donationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationRequestCreateManyArgs>(args?: SelectSubset<T, DonationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationRequests and returns the data saved in the database.
     * @param {DonationRequestCreateManyAndReturnArgs} args - Arguments to create many DonationRequests.
     * @example
     * // Create many DonationRequests
     * const donationRequest = await prisma.donationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationRequests and only return the `id`
     * const donationRequestWithIdOnly = await prisma.donationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationRequest.
     * @param {DonationRequestDeleteArgs} args - Arguments to delete one DonationRequest.
     * @example
     * // Delete one DonationRequest
     * const DonationRequest = await prisma.donationRequest.delete({
     *   where: {
     *     // ... filter to delete one DonationRequest
     *   }
     * })
     * 
     */
    delete<T extends DonationRequestDeleteArgs>(args: SelectSubset<T, DonationRequestDeleteArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationRequest.
     * @param {DonationRequestUpdateArgs} args - Arguments to update one DonationRequest.
     * @example
     * // Update one DonationRequest
     * const donationRequest = await prisma.donationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationRequestUpdateArgs>(args: SelectSubset<T, DonationRequestUpdateArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationRequests.
     * @param {DonationRequestDeleteManyArgs} args - Arguments to filter DonationRequests to delete.
     * @example
     * // Delete a few DonationRequests
     * const { count } = await prisma.donationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationRequestDeleteManyArgs>(args?: SelectSubset<T, DonationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationRequests
     * const donationRequest = await prisma.donationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationRequestUpdateManyArgs>(args: SelectSubset<T, DonationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationRequests and returns the data updated in the database.
     * @param {DonationRequestUpdateManyAndReturnArgs} args - Arguments to update many DonationRequests.
     * @example
     * // Update many DonationRequests
     * const donationRequest = await prisma.donationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationRequests and only return the `id`
     * const donationRequestWithIdOnly = await prisma.donationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationRequest.
     * @param {DonationRequestUpsertArgs} args - Arguments to update or create a DonationRequest.
     * @example
     * // Update or create a DonationRequest
     * const donationRequest = await prisma.donationRequest.upsert({
     *   create: {
     *     // ... data to create a DonationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationRequest we want to update
     *   }
     * })
     */
    upsert<T extends DonationRequestUpsertArgs>(args: SelectSubset<T, DonationRequestUpsertArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestCountArgs} args - Arguments to filter DonationRequests to count.
     * @example
     * // Count the number of DonationRequests
     * const count = await prisma.donationRequest.count({
     *   where: {
     *     // ... the filter for the DonationRequests we want to count
     *   }
     * })
    **/
    count<T extends DonationRequestCountArgs>(
      args?: Subset<T, DonationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationRequestAggregateArgs>(args: Subset<T, DonationRequestAggregateArgs>): Prisma.PrismaPromise<GetDonationRequestAggregateType<T>>

    /**
     * Group by DonationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationRequestGroupByArgs['orderBy'] }
        : { orderBy?: DonationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationRequest model
   */
  readonly fields: DonationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photoDonations<T extends DonationRequest$photoDonationsArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequest$photoDonationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fulfillments<T extends DonationRequest$fulfillmentsArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequest$fulfillmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRooms<T extends DonationRequest$chatRoomsArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequest$chatRoomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donationRequestments<T extends DonationRequest$donationRequestmentsArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequest$donationRequestmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationRequest model
   */
  interface DonationRequestFieldRefs {
    readonly id: FieldRef<"DonationRequest", 'String'>
    readonly namaBarang: FieldRef<"DonationRequest", 'String'>
    readonly requestorFirebaseId: FieldRef<"DonationRequest", 'String'>
    readonly requestorName: FieldRef<"DonationRequest", 'String'>
    readonly donationType: FieldRef<"DonationRequest", 'String'>
    readonly detailBarang: FieldRef<"DonationRequest", 'String'>
    readonly alasanDonasi: FieldRef<"DonationRequest", 'String'>
    readonly locationDescription: FieldRef<"DonationRequest", 'String'>
    readonly latitude: FieldRef<"DonationRequest", 'Float'>
    readonly longitude: FieldRef<"DonationRequest", 'Float'>
    readonly city: FieldRef<"DonationRequest", 'String'>
    readonly description: FieldRef<"DonationRequest", 'String'>
    readonly itemType: FieldRef<"DonationRequest", 'String'>
    readonly itemWeight: FieldRef<"DonationRequest", 'Float'>
    readonly weightUnit: FieldRef<"DonationRequest", 'String'>
    readonly status: FieldRef<"DonationRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"DonationRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationRequest", 'DateTime'>
    readonly expiredAt: FieldRef<"DonationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationRequest findUnique
   */
  export type DonationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequest to fetch.
     */
    where: DonationRequestWhereUniqueInput
  }

  /**
   * DonationRequest findUniqueOrThrow
   */
  export type DonationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequest to fetch.
     */
    where: DonationRequestWhereUniqueInput
  }

  /**
   * DonationRequest findFirst
   */
  export type DonationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequest to fetch.
     */
    where?: DonationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequests to fetch.
     */
    orderBy?: DonationRequestOrderByWithRelationInput | DonationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationRequests.
     */
    cursor?: DonationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationRequests.
     */
    distinct?: DonationRequestScalarFieldEnum | DonationRequestScalarFieldEnum[]
  }

  /**
   * DonationRequest findFirstOrThrow
   */
  export type DonationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequest to fetch.
     */
    where?: DonationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequests to fetch.
     */
    orderBy?: DonationRequestOrderByWithRelationInput | DonationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationRequests.
     */
    cursor?: DonationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationRequests.
     */
    distinct?: DonationRequestScalarFieldEnum | DonationRequestScalarFieldEnum[]
  }

  /**
   * DonationRequest findMany
   */
  export type DonationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequests to fetch.
     */
    where?: DonationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequests to fetch.
     */
    orderBy?: DonationRequestOrderByWithRelationInput | DonationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationRequests.
     */
    cursor?: DonationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequests.
     */
    skip?: number
    distinct?: DonationRequestScalarFieldEnum | DonationRequestScalarFieldEnum[]
  }

  /**
   * DonationRequest create
   */
  export type DonationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationRequest.
     */
    data: XOR<DonationRequestCreateInput, DonationRequestUncheckedCreateInput>
  }

  /**
   * DonationRequest createMany
   */
  export type DonationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationRequests.
     */
    data: DonationRequestCreateManyInput | DonationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationRequest createManyAndReturn
   */
  export type DonationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many DonationRequests.
     */
    data: DonationRequestCreateManyInput | DonationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationRequest update
   */
  export type DonationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationRequest.
     */
    data: XOR<DonationRequestUpdateInput, DonationRequestUncheckedUpdateInput>
    /**
     * Choose, which DonationRequest to update.
     */
    where: DonationRequestWhereUniqueInput
  }

  /**
   * DonationRequest updateMany
   */
  export type DonationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationRequests.
     */
    data: XOR<DonationRequestUpdateManyMutationInput, DonationRequestUncheckedUpdateManyInput>
    /**
     * Filter which DonationRequests to update
     */
    where?: DonationRequestWhereInput
    /**
     * Limit how many DonationRequests to update.
     */
    limit?: number
  }

  /**
   * DonationRequest updateManyAndReturn
   */
  export type DonationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * The data used to update DonationRequests.
     */
    data: XOR<DonationRequestUpdateManyMutationInput, DonationRequestUncheckedUpdateManyInput>
    /**
     * Filter which DonationRequests to update
     */
    where?: DonationRequestWhereInput
    /**
     * Limit how many DonationRequests to update.
     */
    limit?: number
  }

  /**
   * DonationRequest upsert
   */
  export type DonationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationRequest to update in case it exists.
     */
    where: DonationRequestWhereUniqueInput
    /**
     * In case the DonationRequest found by the `where` argument doesn't exist, create a new DonationRequest with this data.
     */
    create: XOR<DonationRequestCreateInput, DonationRequestUncheckedCreateInput>
    /**
     * In case the DonationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationRequestUpdateInput, DonationRequestUncheckedUpdateInput>
  }

  /**
   * DonationRequest delete
   */
  export type DonationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
    /**
     * Filter which DonationRequest to delete.
     */
    where: DonationRequestWhereUniqueInput
  }

  /**
   * DonationRequest deleteMany
   */
  export type DonationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationRequests to delete
     */
    where?: DonationRequestWhereInput
    /**
     * Limit how many DonationRequests to delete.
     */
    limit?: number
  }

  /**
   * DonationRequest.photoDonations
   */
  export type DonationRequest$photoDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    where?: PhotoDonationWhereInput
    orderBy?: PhotoDonationOrderByWithRelationInput | PhotoDonationOrderByWithRelationInput[]
    cursor?: PhotoDonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoDonationScalarFieldEnum | PhotoDonationScalarFieldEnum[]
  }

  /**
   * DonationRequest.fulfillments
   */
  export type DonationRequest$fulfillmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    where?: DonationFulfillmentWhereInput
    orderBy?: DonationFulfillmentOrderByWithRelationInput | DonationFulfillmentOrderByWithRelationInput[]
    cursor?: DonationFulfillmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationFulfillmentScalarFieldEnum | DonationFulfillmentScalarFieldEnum[]
  }

  /**
   * DonationRequest.chatRooms
   */
  export type DonationRequest$chatRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * DonationRequest.donationRequestments
   */
  export type DonationRequest$donationRequestmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    where?: DonationRequestmentWhereInput
    orderBy?: DonationRequestmentOrderByWithRelationInput | DonationRequestmentOrderByWithRelationInput[]
    cursor?: DonationRequestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationRequestmentScalarFieldEnum | DonationRequestmentScalarFieldEnum[]
  }

  /**
   * DonationRequest without action
   */
  export type DonationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequest
     */
    select?: DonationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequest
     */
    omit?: DonationRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestInclude<ExtArgs> | null
  }


  /**
   * Model PhotoDonation
   */

  export type AggregatePhotoDonation = {
    _count: PhotoDonationCountAggregateOutputType | null
    _min: PhotoDonationMinAggregateOutputType | null
    _max: PhotoDonationMaxAggregateOutputType | null
  }

  export type PhotoDonationMinAggregateOutputType = {
    id: string | null
    imageFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
    donationRequestId: string | null
  }

  export type PhotoDonationMaxAggregateOutputType = {
    id: string | null
    imageFile: string | null
    createdAt: Date | null
    updatedAt: Date | null
    donationRequestId: string | null
  }

  export type PhotoDonationCountAggregateOutputType = {
    id: number
    imageFile: number
    createdAt: number
    updatedAt: number
    donationRequestId: number
    _all: number
  }


  export type PhotoDonationMinAggregateInputType = {
    id?: true
    imageFile?: true
    createdAt?: true
    updatedAt?: true
    donationRequestId?: true
  }

  export type PhotoDonationMaxAggregateInputType = {
    id?: true
    imageFile?: true
    createdAt?: true
    updatedAt?: true
    donationRequestId?: true
  }

  export type PhotoDonationCountAggregateInputType = {
    id?: true
    imageFile?: true
    createdAt?: true
    updatedAt?: true
    donationRequestId?: true
    _all?: true
  }

  export type PhotoDonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoDonation to aggregate.
     */
    where?: PhotoDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDonations to fetch.
     */
    orderBy?: PhotoDonationOrderByWithRelationInput | PhotoDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PhotoDonations
    **/
    _count?: true | PhotoDonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoDonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoDonationMaxAggregateInputType
  }

  export type GetPhotoDonationAggregateType<T extends PhotoDonationAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoDonation[P]>
      : GetScalarType<T[P], AggregatePhotoDonation[P]>
  }




  export type PhotoDonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoDonationWhereInput
    orderBy?: PhotoDonationOrderByWithAggregationInput | PhotoDonationOrderByWithAggregationInput[]
    by: PhotoDonationScalarFieldEnum[] | PhotoDonationScalarFieldEnum
    having?: PhotoDonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoDonationCountAggregateInputType | true
    _min?: PhotoDonationMinAggregateInputType
    _max?: PhotoDonationMaxAggregateInputType
  }

  export type PhotoDonationGroupByOutputType = {
    id: string
    imageFile: string
    createdAt: Date
    updatedAt: Date
    donationRequestId: string
    _count: PhotoDonationCountAggregateOutputType | null
    _min: PhotoDonationMinAggregateOutputType | null
    _max: PhotoDonationMaxAggregateOutputType | null
  }

  type GetPhotoDonationGroupByPayload<T extends PhotoDonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoDonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoDonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoDonationGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoDonationGroupByOutputType[P]>
        }
      >
    >


  export type PhotoDonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDonation"]>

  export type PhotoDonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDonation"]>

  export type PhotoDonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photoDonation"]>

  export type PhotoDonationSelectScalar = {
    id?: boolean
    imageFile?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donationRequestId?: boolean
  }

  export type PhotoDonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageFile" | "createdAt" | "updatedAt" | "donationRequestId", ExtArgs["result"]["photoDonation"]>
  export type PhotoDonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }
  export type PhotoDonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }
  export type PhotoDonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }

  export type $PhotoDonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PhotoDonation"
    objects: {
      donationRequest: Prisma.$DonationRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageFile: string
      createdAt: Date
      updatedAt: Date
      donationRequestId: string
    }, ExtArgs["result"]["photoDonation"]>
    composites: {}
  }

  type PhotoDonationGetPayload<S extends boolean | null | undefined | PhotoDonationDefaultArgs> = $Result.GetResult<Prisma.$PhotoDonationPayload, S>

  type PhotoDonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoDonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoDonationCountAggregateInputType | true
    }

  export interface PhotoDonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PhotoDonation'], meta: { name: 'PhotoDonation' } }
    /**
     * Find zero or one PhotoDonation that matches the filter.
     * @param {PhotoDonationFindUniqueArgs} args - Arguments to find a PhotoDonation
     * @example
     * // Get one PhotoDonation
     * const photoDonation = await prisma.photoDonation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoDonationFindUniqueArgs>(args: SelectSubset<T, PhotoDonationFindUniqueArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PhotoDonation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoDonationFindUniqueOrThrowArgs} args - Arguments to find a PhotoDonation
     * @example
     * // Get one PhotoDonation
     * const photoDonation = await prisma.photoDonation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoDonationFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoDonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoDonation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationFindFirstArgs} args - Arguments to find a PhotoDonation
     * @example
     * // Get one PhotoDonation
     * const photoDonation = await prisma.photoDonation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoDonationFindFirstArgs>(args?: SelectSubset<T, PhotoDonationFindFirstArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PhotoDonation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationFindFirstOrThrowArgs} args - Arguments to find a PhotoDonation
     * @example
     * // Get one PhotoDonation
     * const photoDonation = await prisma.photoDonation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoDonationFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoDonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PhotoDonations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PhotoDonations
     * const photoDonations = await prisma.photoDonation.findMany()
     * 
     * // Get first 10 PhotoDonations
     * const photoDonations = await prisma.photoDonation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoDonationWithIdOnly = await prisma.photoDonation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoDonationFindManyArgs>(args?: SelectSubset<T, PhotoDonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PhotoDonation.
     * @param {PhotoDonationCreateArgs} args - Arguments to create a PhotoDonation.
     * @example
     * // Create one PhotoDonation
     * const PhotoDonation = await prisma.photoDonation.create({
     *   data: {
     *     // ... data to create a PhotoDonation
     *   }
     * })
     * 
     */
    create<T extends PhotoDonationCreateArgs>(args: SelectSubset<T, PhotoDonationCreateArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PhotoDonations.
     * @param {PhotoDonationCreateManyArgs} args - Arguments to create many PhotoDonations.
     * @example
     * // Create many PhotoDonations
     * const photoDonation = await prisma.photoDonation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoDonationCreateManyArgs>(args?: SelectSubset<T, PhotoDonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PhotoDonations and returns the data saved in the database.
     * @param {PhotoDonationCreateManyAndReturnArgs} args - Arguments to create many PhotoDonations.
     * @example
     * // Create many PhotoDonations
     * const photoDonation = await prisma.photoDonation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PhotoDonations and only return the `id`
     * const photoDonationWithIdOnly = await prisma.photoDonation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoDonationCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoDonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PhotoDonation.
     * @param {PhotoDonationDeleteArgs} args - Arguments to delete one PhotoDonation.
     * @example
     * // Delete one PhotoDonation
     * const PhotoDonation = await prisma.photoDonation.delete({
     *   where: {
     *     // ... filter to delete one PhotoDonation
     *   }
     * })
     * 
     */
    delete<T extends PhotoDonationDeleteArgs>(args: SelectSubset<T, PhotoDonationDeleteArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PhotoDonation.
     * @param {PhotoDonationUpdateArgs} args - Arguments to update one PhotoDonation.
     * @example
     * // Update one PhotoDonation
     * const photoDonation = await prisma.photoDonation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoDonationUpdateArgs>(args: SelectSubset<T, PhotoDonationUpdateArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PhotoDonations.
     * @param {PhotoDonationDeleteManyArgs} args - Arguments to filter PhotoDonations to delete.
     * @example
     * // Delete a few PhotoDonations
     * const { count } = await prisma.photoDonation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDonationDeleteManyArgs>(args?: SelectSubset<T, PhotoDonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoDonations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PhotoDonations
     * const photoDonation = await prisma.photoDonation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoDonationUpdateManyArgs>(args: SelectSubset<T, PhotoDonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PhotoDonations and returns the data updated in the database.
     * @param {PhotoDonationUpdateManyAndReturnArgs} args - Arguments to update many PhotoDonations.
     * @example
     * // Update many PhotoDonations
     * const photoDonation = await prisma.photoDonation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PhotoDonations and only return the `id`
     * const photoDonationWithIdOnly = await prisma.photoDonation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoDonationUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoDonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PhotoDonation.
     * @param {PhotoDonationUpsertArgs} args - Arguments to update or create a PhotoDonation.
     * @example
     * // Update or create a PhotoDonation
     * const photoDonation = await prisma.photoDonation.upsert({
     *   create: {
     *     // ... data to create a PhotoDonation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PhotoDonation we want to update
     *   }
     * })
     */
    upsert<T extends PhotoDonationUpsertArgs>(args: SelectSubset<T, PhotoDonationUpsertArgs<ExtArgs>>): Prisma__PhotoDonationClient<$Result.GetResult<Prisma.$PhotoDonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PhotoDonations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationCountArgs} args - Arguments to filter PhotoDonations to count.
     * @example
     * // Count the number of PhotoDonations
     * const count = await prisma.photoDonation.count({
     *   where: {
     *     // ... the filter for the PhotoDonations we want to count
     *   }
     * })
    **/
    count<T extends PhotoDonationCountArgs>(
      args?: Subset<T, PhotoDonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoDonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PhotoDonation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoDonationAggregateArgs>(args: Subset<T, PhotoDonationAggregateArgs>): Prisma.PrismaPromise<GetPhotoDonationAggregateType<T>>

    /**
     * Group by PhotoDonation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoDonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoDonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoDonationGroupByArgs['orderBy'] }
        : { orderBy?: PhotoDonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoDonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PhotoDonation model
   */
  readonly fields: PhotoDonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PhotoDonation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoDonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donationRequest<T extends DonationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequestDefaultArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PhotoDonation model
   */
  interface PhotoDonationFieldRefs {
    readonly id: FieldRef<"PhotoDonation", 'String'>
    readonly imageFile: FieldRef<"PhotoDonation", 'String'>
    readonly createdAt: FieldRef<"PhotoDonation", 'DateTime'>
    readonly updatedAt: FieldRef<"PhotoDonation", 'DateTime'>
    readonly donationRequestId: FieldRef<"PhotoDonation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PhotoDonation findUnique
   */
  export type PhotoDonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDonation to fetch.
     */
    where: PhotoDonationWhereUniqueInput
  }

  /**
   * PhotoDonation findUniqueOrThrow
   */
  export type PhotoDonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDonation to fetch.
     */
    where: PhotoDonationWhereUniqueInput
  }

  /**
   * PhotoDonation findFirst
   */
  export type PhotoDonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDonation to fetch.
     */
    where?: PhotoDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDonations to fetch.
     */
    orderBy?: PhotoDonationOrderByWithRelationInput | PhotoDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoDonations.
     */
    cursor?: PhotoDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoDonations.
     */
    distinct?: PhotoDonationScalarFieldEnum | PhotoDonationScalarFieldEnum[]
  }

  /**
   * PhotoDonation findFirstOrThrow
   */
  export type PhotoDonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDonation to fetch.
     */
    where?: PhotoDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDonations to fetch.
     */
    orderBy?: PhotoDonationOrderByWithRelationInput | PhotoDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PhotoDonations.
     */
    cursor?: PhotoDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDonations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PhotoDonations.
     */
    distinct?: PhotoDonationScalarFieldEnum | PhotoDonationScalarFieldEnum[]
  }

  /**
   * PhotoDonation findMany
   */
  export type PhotoDonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter, which PhotoDonations to fetch.
     */
    where?: PhotoDonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PhotoDonations to fetch.
     */
    orderBy?: PhotoDonationOrderByWithRelationInput | PhotoDonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PhotoDonations.
     */
    cursor?: PhotoDonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PhotoDonations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PhotoDonations.
     */
    skip?: number
    distinct?: PhotoDonationScalarFieldEnum | PhotoDonationScalarFieldEnum[]
  }

  /**
   * PhotoDonation create
   */
  export type PhotoDonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * The data needed to create a PhotoDonation.
     */
    data: XOR<PhotoDonationCreateInput, PhotoDonationUncheckedCreateInput>
  }

  /**
   * PhotoDonation createMany
   */
  export type PhotoDonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PhotoDonations.
     */
    data: PhotoDonationCreateManyInput | PhotoDonationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PhotoDonation createManyAndReturn
   */
  export type PhotoDonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * The data used to create many PhotoDonations.
     */
    data: PhotoDonationCreateManyInput | PhotoDonationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoDonation update
   */
  export type PhotoDonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * The data needed to update a PhotoDonation.
     */
    data: XOR<PhotoDonationUpdateInput, PhotoDonationUncheckedUpdateInput>
    /**
     * Choose, which PhotoDonation to update.
     */
    where: PhotoDonationWhereUniqueInput
  }

  /**
   * PhotoDonation updateMany
   */
  export type PhotoDonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PhotoDonations.
     */
    data: XOR<PhotoDonationUpdateManyMutationInput, PhotoDonationUncheckedUpdateManyInput>
    /**
     * Filter which PhotoDonations to update
     */
    where?: PhotoDonationWhereInput
    /**
     * Limit how many PhotoDonations to update.
     */
    limit?: number
  }

  /**
   * PhotoDonation updateManyAndReturn
   */
  export type PhotoDonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * The data used to update PhotoDonations.
     */
    data: XOR<PhotoDonationUpdateManyMutationInput, PhotoDonationUncheckedUpdateManyInput>
    /**
     * Filter which PhotoDonations to update
     */
    where?: PhotoDonationWhereInput
    /**
     * Limit how many PhotoDonations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PhotoDonation upsert
   */
  export type PhotoDonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * The filter to search for the PhotoDonation to update in case it exists.
     */
    where: PhotoDonationWhereUniqueInput
    /**
     * In case the PhotoDonation found by the `where` argument doesn't exist, create a new PhotoDonation with this data.
     */
    create: XOR<PhotoDonationCreateInput, PhotoDonationUncheckedCreateInput>
    /**
     * In case the PhotoDonation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoDonationUpdateInput, PhotoDonationUncheckedUpdateInput>
  }

  /**
   * PhotoDonation delete
   */
  export type PhotoDonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
    /**
     * Filter which PhotoDonation to delete.
     */
    where: PhotoDonationWhereUniqueInput
  }

  /**
   * PhotoDonation deleteMany
   */
  export type PhotoDonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PhotoDonations to delete
     */
    where?: PhotoDonationWhereInput
    /**
     * Limit how many PhotoDonations to delete.
     */
    limit?: number
  }

  /**
   * PhotoDonation without action
   */
  export type PhotoDonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PhotoDonation
     */
    select?: PhotoDonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PhotoDonation
     */
    omit?: PhotoDonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoDonationInclude<ExtArgs> | null
  }


  /**
   * Model DonationFulfillment
   */

  export type AggregateDonationFulfillment = {
    _count: DonationFulfillmentCountAggregateOutputType | null
    _avg: DonationFulfillmentAvgAggregateOutputType | null
    _sum: DonationFulfillmentSumAggregateOutputType | null
    _min: DonationFulfillmentMinAggregateOutputType | null
    _max: DonationFulfillmentMaxAggregateOutputType | null
  }

  export type DonationFulfillmentAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DonationFulfillmentSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DonationFulfillmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    donorFirebaseId: string | null
    donorRequestFirebaseId: string | null
    donorName: string | null
    donorNotes: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    status: $Enums.RequestStatus | null
    donationRequestId: string | null
  }

  export type DonationFulfillmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    donorFirebaseId: string | null
    donorRequestFirebaseId: string | null
    donorName: string | null
    donorNotes: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    status: $Enums.RequestStatus | null
    donationRequestId: string | null
  }

  export type DonationFulfillmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    donorFirebaseId: number
    donorRequestFirebaseId: number
    donorName: number
    donorNotes: number
    latitude: number
    longitude: number
    address: number
    city: number
    status: number
    donationRequestId: number
    _all: number
  }


  export type DonationFulfillmentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DonationFulfillmentSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DonationFulfillmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    donorFirebaseId?: true
    donorRequestFirebaseId?: true
    donorName?: true
    donorNotes?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    status?: true
    donationRequestId?: true
  }

  export type DonationFulfillmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    donorFirebaseId?: true
    donorRequestFirebaseId?: true
    donorName?: true
    donorNotes?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    status?: true
    donationRequestId?: true
  }

  export type DonationFulfillmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    donorFirebaseId?: true
    donorRequestFirebaseId?: true
    donorName?: true
    donorNotes?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    status?: true
    donationRequestId?: true
    _all?: true
  }

  export type DonationFulfillmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationFulfillment to aggregate.
     */
    where?: DonationFulfillmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationFulfillments to fetch.
     */
    orderBy?: DonationFulfillmentOrderByWithRelationInput | DonationFulfillmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationFulfillmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationFulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationFulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationFulfillments
    **/
    _count?: true | DonationFulfillmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationFulfillmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationFulfillmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationFulfillmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationFulfillmentMaxAggregateInputType
  }

  export type GetDonationFulfillmentAggregateType<T extends DonationFulfillmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationFulfillment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationFulfillment[P]>
      : GetScalarType<T[P], AggregateDonationFulfillment[P]>
  }




  export type DonationFulfillmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationFulfillmentWhereInput
    orderBy?: DonationFulfillmentOrderByWithAggregationInput | DonationFulfillmentOrderByWithAggregationInput[]
    by: DonationFulfillmentScalarFieldEnum[] | DonationFulfillmentScalarFieldEnum
    having?: DonationFulfillmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationFulfillmentCountAggregateInputType | true
    _avg?: DonationFulfillmentAvgAggregateInputType
    _sum?: DonationFulfillmentSumAggregateInputType
    _min?: DonationFulfillmentMinAggregateInputType
    _max?: DonationFulfillmentMaxAggregateInputType
  }

  export type DonationFulfillmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    donorFirebaseId: string
    donorRequestFirebaseId: string | null
    donorName: string
    donorNotes: string
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    status: $Enums.RequestStatus
    donationRequestId: string
    _count: DonationFulfillmentCountAggregateOutputType | null
    _avg: DonationFulfillmentAvgAggregateOutputType | null
    _sum: DonationFulfillmentSumAggregateOutputType | null
    _min: DonationFulfillmentMinAggregateOutputType | null
    _max: DonationFulfillmentMaxAggregateOutputType | null
  }

  type GetDonationFulfillmentGroupByPayload<T extends DonationFulfillmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationFulfillmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationFulfillmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationFulfillmentGroupByOutputType[P]>
            : GetScalarType<T[P], DonationFulfillmentGroupByOutputType[P]>
        }
      >
    >


  export type DonationFulfillmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donorFirebaseId?: boolean
    donorRequestFirebaseId?: boolean
    donorName?: boolean
    donorNotes?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    status?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
    chatRoom?: boolean | DonationFulfillment$chatRoomArgs<ExtArgs>
  }, ExtArgs["result"]["donationFulfillment"]>

  export type DonationFulfillmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donorFirebaseId?: boolean
    donorRequestFirebaseId?: boolean
    donorName?: boolean
    donorNotes?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    status?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationFulfillment"]>

  export type DonationFulfillmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donorFirebaseId?: boolean
    donorRequestFirebaseId?: boolean
    donorName?: boolean
    donorNotes?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    status?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationFulfillment"]>

  export type DonationFulfillmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donorFirebaseId?: boolean
    donorRequestFirebaseId?: boolean
    donorName?: boolean
    donorNotes?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    status?: boolean
    donationRequestId?: boolean
  }

  export type DonationFulfillmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "donorFirebaseId" | "donorRequestFirebaseId" | "donorName" | "donorNotes" | "latitude" | "longitude" | "address" | "city" | "status" | "donationRequestId", ExtArgs["result"]["donationFulfillment"]>
  export type DonationFulfillmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
    chatRoom?: boolean | DonationFulfillment$chatRoomArgs<ExtArgs>
  }
  export type DonationFulfillmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }
  export type DonationFulfillmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }

  export type $DonationFulfillmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationFulfillment"
    objects: {
      donationRequest: Prisma.$DonationRequestPayload<ExtArgs>
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      donorFirebaseId: string
      donorRequestFirebaseId: string | null
      donorName: string
      donorNotes: string
      latitude: number | null
      longitude: number | null
      address: string | null
      city: string | null
      status: $Enums.RequestStatus
      donationRequestId: string
    }, ExtArgs["result"]["donationFulfillment"]>
    composites: {}
  }

  type DonationFulfillmentGetPayload<S extends boolean | null | undefined | DonationFulfillmentDefaultArgs> = $Result.GetResult<Prisma.$DonationFulfillmentPayload, S>

  type DonationFulfillmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFulfillmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationFulfillmentCountAggregateInputType | true
    }

  export interface DonationFulfillmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationFulfillment'], meta: { name: 'DonationFulfillment' } }
    /**
     * Find zero or one DonationFulfillment that matches the filter.
     * @param {DonationFulfillmentFindUniqueArgs} args - Arguments to find a DonationFulfillment
     * @example
     * // Get one DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFulfillmentFindUniqueArgs>(args: SelectSubset<T, DonationFulfillmentFindUniqueArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationFulfillment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFulfillmentFindUniqueOrThrowArgs} args - Arguments to find a DonationFulfillment
     * @example
     * // Get one DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFulfillmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFulfillmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationFulfillment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentFindFirstArgs} args - Arguments to find a DonationFulfillment
     * @example
     * // Get one DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFulfillmentFindFirstArgs>(args?: SelectSubset<T, DonationFulfillmentFindFirstArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationFulfillment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentFindFirstOrThrowArgs} args - Arguments to find a DonationFulfillment
     * @example
     * // Get one DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFulfillmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFulfillmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationFulfillments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationFulfillments
     * const donationFulfillments = await prisma.donationFulfillment.findMany()
     * 
     * // Get first 10 DonationFulfillments
     * const donationFulfillments = await prisma.donationFulfillment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationFulfillmentWithIdOnly = await prisma.donationFulfillment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFulfillmentFindManyArgs>(args?: SelectSubset<T, DonationFulfillmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationFulfillment.
     * @param {DonationFulfillmentCreateArgs} args - Arguments to create a DonationFulfillment.
     * @example
     * // Create one DonationFulfillment
     * const DonationFulfillment = await prisma.donationFulfillment.create({
     *   data: {
     *     // ... data to create a DonationFulfillment
     *   }
     * })
     * 
     */
    create<T extends DonationFulfillmentCreateArgs>(args: SelectSubset<T, DonationFulfillmentCreateArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationFulfillments.
     * @param {DonationFulfillmentCreateManyArgs} args - Arguments to create many DonationFulfillments.
     * @example
     * // Create many DonationFulfillments
     * const donationFulfillment = await prisma.donationFulfillment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationFulfillmentCreateManyArgs>(args?: SelectSubset<T, DonationFulfillmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationFulfillments and returns the data saved in the database.
     * @param {DonationFulfillmentCreateManyAndReturnArgs} args - Arguments to create many DonationFulfillments.
     * @example
     * // Create many DonationFulfillments
     * const donationFulfillment = await prisma.donationFulfillment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationFulfillments and only return the `id`
     * const donationFulfillmentWithIdOnly = await prisma.donationFulfillment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationFulfillmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationFulfillmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationFulfillment.
     * @param {DonationFulfillmentDeleteArgs} args - Arguments to delete one DonationFulfillment.
     * @example
     * // Delete one DonationFulfillment
     * const DonationFulfillment = await prisma.donationFulfillment.delete({
     *   where: {
     *     // ... filter to delete one DonationFulfillment
     *   }
     * })
     * 
     */
    delete<T extends DonationFulfillmentDeleteArgs>(args: SelectSubset<T, DonationFulfillmentDeleteArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationFulfillment.
     * @param {DonationFulfillmentUpdateArgs} args - Arguments to update one DonationFulfillment.
     * @example
     * // Update one DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationFulfillmentUpdateArgs>(args: SelectSubset<T, DonationFulfillmentUpdateArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationFulfillments.
     * @param {DonationFulfillmentDeleteManyArgs} args - Arguments to filter DonationFulfillments to delete.
     * @example
     * // Delete a few DonationFulfillments
     * const { count } = await prisma.donationFulfillment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationFulfillmentDeleteManyArgs>(args?: SelectSubset<T, DonationFulfillmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationFulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationFulfillments
     * const donationFulfillment = await prisma.donationFulfillment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationFulfillmentUpdateManyArgs>(args: SelectSubset<T, DonationFulfillmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationFulfillments and returns the data updated in the database.
     * @param {DonationFulfillmentUpdateManyAndReturnArgs} args - Arguments to update many DonationFulfillments.
     * @example
     * // Update many DonationFulfillments
     * const donationFulfillment = await prisma.donationFulfillment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationFulfillments and only return the `id`
     * const donationFulfillmentWithIdOnly = await prisma.donationFulfillment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationFulfillmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationFulfillmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationFulfillment.
     * @param {DonationFulfillmentUpsertArgs} args - Arguments to update or create a DonationFulfillment.
     * @example
     * // Update or create a DonationFulfillment
     * const donationFulfillment = await prisma.donationFulfillment.upsert({
     *   create: {
     *     // ... data to create a DonationFulfillment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationFulfillment we want to update
     *   }
     * })
     */
    upsert<T extends DonationFulfillmentUpsertArgs>(args: SelectSubset<T, DonationFulfillmentUpsertArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationFulfillments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentCountArgs} args - Arguments to filter DonationFulfillments to count.
     * @example
     * // Count the number of DonationFulfillments
     * const count = await prisma.donationFulfillment.count({
     *   where: {
     *     // ... the filter for the DonationFulfillments we want to count
     *   }
     * })
    **/
    count<T extends DonationFulfillmentCountArgs>(
      args?: Subset<T, DonationFulfillmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationFulfillmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationFulfillment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationFulfillmentAggregateArgs>(args: Subset<T, DonationFulfillmentAggregateArgs>): Prisma.PrismaPromise<GetDonationFulfillmentAggregateType<T>>

    /**
     * Group by DonationFulfillment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFulfillmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationFulfillmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationFulfillmentGroupByArgs['orderBy'] }
        : { orderBy?: DonationFulfillmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationFulfillmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationFulfillmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationFulfillment model
   */
  readonly fields: DonationFulfillmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationFulfillment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationFulfillmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donationRequest<T extends DonationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequestDefaultArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatRoom<T extends DonationFulfillment$chatRoomArgs<ExtArgs> = {}>(args?: Subset<T, DonationFulfillment$chatRoomArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationFulfillment model
   */
  interface DonationFulfillmentFieldRefs {
    readonly id: FieldRef<"DonationFulfillment", 'String'>
    readonly createdAt: FieldRef<"DonationFulfillment", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationFulfillment", 'DateTime'>
    readonly donorFirebaseId: FieldRef<"DonationFulfillment", 'String'>
    readonly donorRequestFirebaseId: FieldRef<"DonationFulfillment", 'String'>
    readonly donorName: FieldRef<"DonationFulfillment", 'String'>
    readonly donorNotes: FieldRef<"DonationFulfillment", 'String'>
    readonly latitude: FieldRef<"DonationFulfillment", 'Float'>
    readonly longitude: FieldRef<"DonationFulfillment", 'Float'>
    readonly address: FieldRef<"DonationFulfillment", 'String'>
    readonly city: FieldRef<"DonationFulfillment", 'String'>
    readonly status: FieldRef<"DonationFulfillment", 'RequestStatus'>
    readonly donationRequestId: FieldRef<"DonationFulfillment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonationFulfillment findUnique
   */
  export type DonationFulfillmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationFulfillment to fetch.
     */
    where: DonationFulfillmentWhereUniqueInput
  }

  /**
   * DonationFulfillment findUniqueOrThrow
   */
  export type DonationFulfillmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationFulfillment to fetch.
     */
    where: DonationFulfillmentWhereUniqueInput
  }

  /**
   * DonationFulfillment findFirst
   */
  export type DonationFulfillmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationFulfillment to fetch.
     */
    where?: DonationFulfillmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationFulfillments to fetch.
     */
    orderBy?: DonationFulfillmentOrderByWithRelationInput | DonationFulfillmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationFulfillments.
     */
    cursor?: DonationFulfillmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationFulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationFulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationFulfillments.
     */
    distinct?: DonationFulfillmentScalarFieldEnum | DonationFulfillmentScalarFieldEnum[]
  }

  /**
   * DonationFulfillment findFirstOrThrow
   */
  export type DonationFulfillmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationFulfillment to fetch.
     */
    where?: DonationFulfillmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationFulfillments to fetch.
     */
    orderBy?: DonationFulfillmentOrderByWithRelationInput | DonationFulfillmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationFulfillments.
     */
    cursor?: DonationFulfillmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationFulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationFulfillments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationFulfillments.
     */
    distinct?: DonationFulfillmentScalarFieldEnum | DonationFulfillmentScalarFieldEnum[]
  }

  /**
   * DonationFulfillment findMany
   */
  export type DonationFulfillmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationFulfillments to fetch.
     */
    where?: DonationFulfillmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationFulfillments to fetch.
     */
    orderBy?: DonationFulfillmentOrderByWithRelationInput | DonationFulfillmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationFulfillments.
     */
    cursor?: DonationFulfillmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationFulfillments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationFulfillments.
     */
    skip?: number
    distinct?: DonationFulfillmentScalarFieldEnum | DonationFulfillmentScalarFieldEnum[]
  }

  /**
   * DonationFulfillment create
   */
  export type DonationFulfillmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationFulfillment.
     */
    data: XOR<DonationFulfillmentCreateInput, DonationFulfillmentUncheckedCreateInput>
  }

  /**
   * DonationFulfillment createMany
   */
  export type DonationFulfillmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationFulfillments.
     */
    data: DonationFulfillmentCreateManyInput | DonationFulfillmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationFulfillment createManyAndReturn
   */
  export type DonationFulfillmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * The data used to create many DonationFulfillments.
     */
    data: DonationFulfillmentCreateManyInput | DonationFulfillmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationFulfillment update
   */
  export type DonationFulfillmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationFulfillment.
     */
    data: XOR<DonationFulfillmentUpdateInput, DonationFulfillmentUncheckedUpdateInput>
    /**
     * Choose, which DonationFulfillment to update.
     */
    where: DonationFulfillmentWhereUniqueInput
  }

  /**
   * DonationFulfillment updateMany
   */
  export type DonationFulfillmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationFulfillments.
     */
    data: XOR<DonationFulfillmentUpdateManyMutationInput, DonationFulfillmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationFulfillments to update
     */
    where?: DonationFulfillmentWhereInput
    /**
     * Limit how many DonationFulfillments to update.
     */
    limit?: number
  }

  /**
   * DonationFulfillment updateManyAndReturn
   */
  export type DonationFulfillmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * The data used to update DonationFulfillments.
     */
    data: XOR<DonationFulfillmentUpdateManyMutationInput, DonationFulfillmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationFulfillments to update
     */
    where?: DonationFulfillmentWhereInput
    /**
     * Limit how many DonationFulfillments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationFulfillment upsert
   */
  export type DonationFulfillmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationFulfillment to update in case it exists.
     */
    where: DonationFulfillmentWhereUniqueInput
    /**
     * In case the DonationFulfillment found by the `where` argument doesn't exist, create a new DonationFulfillment with this data.
     */
    create: XOR<DonationFulfillmentCreateInput, DonationFulfillmentUncheckedCreateInput>
    /**
     * In case the DonationFulfillment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationFulfillmentUpdateInput, DonationFulfillmentUncheckedUpdateInput>
  }

  /**
   * DonationFulfillment delete
   */
  export type DonationFulfillmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    /**
     * Filter which DonationFulfillment to delete.
     */
    where: DonationFulfillmentWhereUniqueInput
  }

  /**
   * DonationFulfillment deleteMany
   */
  export type DonationFulfillmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationFulfillments to delete
     */
    where?: DonationFulfillmentWhereInput
    /**
     * Limit how many DonationFulfillments to delete.
     */
    limit?: number
  }

  /**
   * DonationFulfillment.chatRoom
   */
  export type DonationFulfillment$chatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
  }

  /**
   * DonationFulfillment without action
   */
  export type DonationFulfillmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
  }


  /**
   * Model DonationRequestment
   */

  export type AggregateDonationRequestment = {
    _count: DonationRequestmentCountAggregateOutputType | null
    _avg: DonationRequestmentAvgAggregateOutputType | null
    _sum: DonationRequestmentSumAggregateOutputType | null
    _min: DonationRequestmentMinAggregateOutputType | null
    _max: DonationRequestmentMaxAggregateOutputType | null
  }

  export type DonationRequestmentAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DonationRequestmentSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type DonationRequestmentMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestorId: string | null
    donorFirebaseId: string | null
    status: $Enums.RequestStatus | null
    donorName: string | null
    reason: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    donationRequestId: string | null
  }

  export type DonationRequestmentMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    requestorId: string | null
    donorFirebaseId: string | null
    status: $Enums.RequestStatus | null
    donorName: string | null
    reason: string | null
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    donationRequestId: string | null
  }

  export type DonationRequestmentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    requestorId: number
    donorFirebaseId: number
    status: number
    donorName: number
    reason: number
    latitude: number
    longitude: number
    address: number
    city: number
    donationRequestId: number
    _all: number
  }


  export type DonationRequestmentAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DonationRequestmentSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type DonationRequestmentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    requestorId?: true
    donorFirebaseId?: true
    status?: true
    donorName?: true
    reason?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    donationRequestId?: true
  }

  export type DonationRequestmentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    requestorId?: true
    donorFirebaseId?: true
    status?: true
    donorName?: true
    reason?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    donationRequestId?: true
  }

  export type DonationRequestmentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    requestorId?: true
    donorFirebaseId?: true
    status?: true
    donorName?: true
    reason?: true
    latitude?: true
    longitude?: true
    address?: true
    city?: true
    donationRequestId?: true
    _all?: true
  }

  export type DonationRequestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationRequestment to aggregate.
     */
    where?: DonationRequestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequestments to fetch.
     */
    orderBy?: DonationRequestmentOrderByWithRelationInput | DonationRequestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationRequestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequestments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequestments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationRequestments
    **/
    _count?: true | DonationRequestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationRequestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationRequestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationRequestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationRequestmentMaxAggregateInputType
  }

  export type GetDonationRequestmentAggregateType<T extends DonationRequestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationRequestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationRequestment[P]>
      : GetScalarType<T[P], AggregateDonationRequestment[P]>
  }




  export type DonationRequestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationRequestmentWhereInput
    orderBy?: DonationRequestmentOrderByWithAggregationInput | DonationRequestmentOrderByWithAggregationInput[]
    by: DonationRequestmentScalarFieldEnum[] | DonationRequestmentScalarFieldEnum
    having?: DonationRequestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationRequestmentCountAggregateInputType | true
    _avg?: DonationRequestmentAvgAggregateInputType
    _sum?: DonationRequestmentSumAggregateInputType
    _min?: DonationRequestmentMinAggregateInputType
    _max?: DonationRequestmentMaxAggregateInputType
  }

  export type DonationRequestmentGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    requestorId: string
    donorFirebaseId: string | null
    status: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude: number | null
    longitude: number | null
    address: string | null
    city: string | null
    donationRequestId: string
    _count: DonationRequestmentCountAggregateOutputType | null
    _avg: DonationRequestmentAvgAggregateOutputType | null
    _sum: DonationRequestmentSumAggregateOutputType | null
    _min: DonationRequestmentMinAggregateOutputType | null
    _max: DonationRequestmentMaxAggregateOutputType | null
  }

  type GetDonationRequestmentGroupByPayload<T extends DonationRequestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationRequestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationRequestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationRequestmentGroupByOutputType[P]>
            : GetScalarType<T[P], DonationRequestmentGroupByOutputType[P]>
        }
      >
    >


  export type DonationRequestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestorId?: boolean
    donorFirebaseId?: boolean
    status?: boolean
    donorName?: boolean
    reason?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
    chatRoom?: boolean | DonationRequestment$chatRoomArgs<ExtArgs>
  }, ExtArgs["result"]["donationRequestment"]>

  export type DonationRequestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestorId?: boolean
    donorFirebaseId?: boolean
    status?: boolean
    donorName?: boolean
    reason?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationRequestment"]>

  export type DonationRequestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestorId?: boolean
    donorFirebaseId?: boolean
    status?: boolean
    donorName?: boolean
    reason?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    donationRequestId?: boolean
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donationRequestment"]>

  export type DonationRequestmentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    requestorId?: boolean
    donorFirebaseId?: boolean
    status?: boolean
    donorName?: boolean
    reason?: boolean
    latitude?: boolean
    longitude?: boolean
    address?: boolean
    city?: boolean
    donationRequestId?: boolean
  }

  export type DonationRequestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "requestorId" | "donorFirebaseId" | "status" | "donorName" | "reason" | "latitude" | "longitude" | "address" | "city" | "donationRequestId", ExtArgs["result"]["donationRequestment"]>
  export type DonationRequestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
    chatRoom?: boolean | DonationRequestment$chatRoomArgs<ExtArgs>
  }
  export type DonationRequestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }
  export type DonationRequestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donationRequest?: boolean | DonationRequestDefaultArgs<ExtArgs>
  }

  export type $DonationRequestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationRequestment"
    objects: {
      donationRequest: Prisma.$DonationRequestPayload<ExtArgs>
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      requestorId: string
      donorFirebaseId: string | null
      status: $Enums.RequestStatus
      donorName: string
      reason: string
      latitude: number | null
      longitude: number | null
      address: string | null
      city: string | null
      donationRequestId: string
    }, ExtArgs["result"]["donationRequestment"]>
    composites: {}
  }

  type DonationRequestmentGetPayload<S extends boolean | null | undefined | DonationRequestmentDefaultArgs> = $Result.GetResult<Prisma.$DonationRequestmentPayload, S>

  type DonationRequestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationRequestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationRequestmentCountAggregateInputType | true
    }

  export interface DonationRequestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationRequestment'], meta: { name: 'DonationRequestment' } }
    /**
     * Find zero or one DonationRequestment that matches the filter.
     * @param {DonationRequestmentFindUniqueArgs} args - Arguments to find a DonationRequestment
     * @example
     * // Get one DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationRequestmentFindUniqueArgs>(args: SelectSubset<T, DonationRequestmentFindUniqueArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationRequestment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationRequestmentFindUniqueOrThrowArgs} args - Arguments to find a DonationRequestment
     * @example
     * // Get one DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationRequestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationRequestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationRequestment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentFindFirstArgs} args - Arguments to find a DonationRequestment
     * @example
     * // Get one DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationRequestmentFindFirstArgs>(args?: SelectSubset<T, DonationRequestmentFindFirstArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationRequestment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentFindFirstOrThrowArgs} args - Arguments to find a DonationRequestment
     * @example
     * // Get one DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationRequestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationRequestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationRequestments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationRequestments
     * const donationRequestments = await prisma.donationRequestment.findMany()
     * 
     * // Get first 10 DonationRequestments
     * const donationRequestments = await prisma.donationRequestment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationRequestmentWithIdOnly = await prisma.donationRequestment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationRequestmentFindManyArgs>(args?: SelectSubset<T, DonationRequestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationRequestment.
     * @param {DonationRequestmentCreateArgs} args - Arguments to create a DonationRequestment.
     * @example
     * // Create one DonationRequestment
     * const DonationRequestment = await prisma.donationRequestment.create({
     *   data: {
     *     // ... data to create a DonationRequestment
     *   }
     * })
     * 
     */
    create<T extends DonationRequestmentCreateArgs>(args: SelectSubset<T, DonationRequestmentCreateArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationRequestments.
     * @param {DonationRequestmentCreateManyArgs} args - Arguments to create many DonationRequestments.
     * @example
     * // Create many DonationRequestments
     * const donationRequestment = await prisma.donationRequestment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationRequestmentCreateManyArgs>(args?: SelectSubset<T, DonationRequestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationRequestments and returns the data saved in the database.
     * @param {DonationRequestmentCreateManyAndReturnArgs} args - Arguments to create many DonationRequestments.
     * @example
     * // Create many DonationRequestments
     * const donationRequestment = await prisma.donationRequestment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationRequestments and only return the `id`
     * const donationRequestmentWithIdOnly = await prisma.donationRequestment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationRequestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationRequestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationRequestment.
     * @param {DonationRequestmentDeleteArgs} args - Arguments to delete one DonationRequestment.
     * @example
     * // Delete one DonationRequestment
     * const DonationRequestment = await prisma.donationRequestment.delete({
     *   where: {
     *     // ... filter to delete one DonationRequestment
     *   }
     * })
     * 
     */
    delete<T extends DonationRequestmentDeleteArgs>(args: SelectSubset<T, DonationRequestmentDeleteArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationRequestment.
     * @param {DonationRequestmentUpdateArgs} args - Arguments to update one DonationRequestment.
     * @example
     * // Update one DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationRequestmentUpdateArgs>(args: SelectSubset<T, DonationRequestmentUpdateArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationRequestments.
     * @param {DonationRequestmentDeleteManyArgs} args - Arguments to filter DonationRequestments to delete.
     * @example
     * // Delete a few DonationRequestments
     * const { count } = await prisma.donationRequestment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationRequestmentDeleteManyArgs>(args?: SelectSubset<T, DonationRequestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationRequestments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationRequestments
     * const donationRequestment = await prisma.donationRequestment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationRequestmentUpdateManyArgs>(args: SelectSubset<T, DonationRequestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationRequestments and returns the data updated in the database.
     * @param {DonationRequestmentUpdateManyAndReturnArgs} args - Arguments to update many DonationRequestments.
     * @example
     * // Update many DonationRequestments
     * const donationRequestment = await prisma.donationRequestment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationRequestments and only return the `id`
     * const donationRequestmentWithIdOnly = await prisma.donationRequestment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationRequestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationRequestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationRequestment.
     * @param {DonationRequestmentUpsertArgs} args - Arguments to update or create a DonationRequestment.
     * @example
     * // Update or create a DonationRequestment
     * const donationRequestment = await prisma.donationRequestment.upsert({
     *   create: {
     *     // ... data to create a DonationRequestment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationRequestment we want to update
     *   }
     * })
     */
    upsert<T extends DonationRequestmentUpsertArgs>(args: SelectSubset<T, DonationRequestmentUpsertArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationRequestments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentCountArgs} args - Arguments to filter DonationRequestments to count.
     * @example
     * // Count the number of DonationRequestments
     * const count = await prisma.donationRequestment.count({
     *   where: {
     *     // ... the filter for the DonationRequestments we want to count
     *   }
     * })
    **/
    count<T extends DonationRequestmentCountArgs>(
      args?: Subset<T, DonationRequestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationRequestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationRequestment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationRequestmentAggregateArgs>(args: Subset<T, DonationRequestmentAggregateArgs>): Prisma.PrismaPromise<GetDonationRequestmentAggregateType<T>>

    /**
     * Group by DonationRequestment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationRequestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationRequestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationRequestmentGroupByArgs['orderBy'] }
        : { orderBy?: DonationRequestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationRequestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationRequestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationRequestment model
   */
  readonly fields: DonationRequestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationRequestment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationRequestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donationRequest<T extends DonationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequestDefaultArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chatRoom<T extends DonationRequestment$chatRoomArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequestment$chatRoomArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DonationRequestment model
   */
  interface DonationRequestmentFieldRefs {
    readonly id: FieldRef<"DonationRequestment", 'String'>
    readonly createdAt: FieldRef<"DonationRequestment", 'DateTime'>
    readonly updatedAt: FieldRef<"DonationRequestment", 'DateTime'>
    readonly requestorId: FieldRef<"DonationRequestment", 'String'>
    readonly donorFirebaseId: FieldRef<"DonationRequestment", 'String'>
    readonly status: FieldRef<"DonationRequestment", 'RequestStatus'>
    readonly donorName: FieldRef<"DonationRequestment", 'String'>
    readonly reason: FieldRef<"DonationRequestment", 'String'>
    readonly latitude: FieldRef<"DonationRequestment", 'Float'>
    readonly longitude: FieldRef<"DonationRequestment", 'Float'>
    readonly address: FieldRef<"DonationRequestment", 'String'>
    readonly city: FieldRef<"DonationRequestment", 'String'>
    readonly donationRequestId: FieldRef<"DonationRequestment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DonationRequestment findUnique
   */
  export type DonationRequestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequestment to fetch.
     */
    where: DonationRequestmentWhereUniqueInput
  }

  /**
   * DonationRequestment findUniqueOrThrow
   */
  export type DonationRequestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequestment to fetch.
     */
    where: DonationRequestmentWhereUniqueInput
  }

  /**
   * DonationRequestment findFirst
   */
  export type DonationRequestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequestment to fetch.
     */
    where?: DonationRequestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequestments to fetch.
     */
    orderBy?: DonationRequestmentOrderByWithRelationInput | DonationRequestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationRequestments.
     */
    cursor?: DonationRequestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequestments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequestments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationRequestments.
     */
    distinct?: DonationRequestmentScalarFieldEnum | DonationRequestmentScalarFieldEnum[]
  }

  /**
   * DonationRequestment findFirstOrThrow
   */
  export type DonationRequestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequestment to fetch.
     */
    where?: DonationRequestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequestments to fetch.
     */
    orderBy?: DonationRequestmentOrderByWithRelationInput | DonationRequestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationRequestments.
     */
    cursor?: DonationRequestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequestments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequestments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationRequestments.
     */
    distinct?: DonationRequestmentScalarFieldEnum | DonationRequestmentScalarFieldEnum[]
  }

  /**
   * DonationRequestment findMany
   */
  export type DonationRequestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter, which DonationRequestments to fetch.
     */
    where?: DonationRequestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationRequestments to fetch.
     */
    orderBy?: DonationRequestmentOrderByWithRelationInput | DonationRequestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationRequestments.
     */
    cursor?: DonationRequestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationRequestments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationRequestments.
     */
    skip?: number
    distinct?: DonationRequestmentScalarFieldEnum | DonationRequestmentScalarFieldEnum[]
  }

  /**
   * DonationRequestment create
   */
  export type DonationRequestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a DonationRequestment.
     */
    data: XOR<DonationRequestmentCreateInput, DonationRequestmentUncheckedCreateInput>
  }

  /**
   * DonationRequestment createMany
   */
  export type DonationRequestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationRequestments.
     */
    data: DonationRequestmentCreateManyInput | DonationRequestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationRequestment createManyAndReturn
   */
  export type DonationRequestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * The data used to create many DonationRequestments.
     */
    data: DonationRequestmentCreateManyInput | DonationRequestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationRequestment update
   */
  export type DonationRequestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a DonationRequestment.
     */
    data: XOR<DonationRequestmentUpdateInput, DonationRequestmentUncheckedUpdateInput>
    /**
     * Choose, which DonationRequestment to update.
     */
    where: DonationRequestmentWhereUniqueInput
  }

  /**
   * DonationRequestment updateMany
   */
  export type DonationRequestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationRequestments.
     */
    data: XOR<DonationRequestmentUpdateManyMutationInput, DonationRequestmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationRequestments to update
     */
    where?: DonationRequestmentWhereInput
    /**
     * Limit how many DonationRequestments to update.
     */
    limit?: number
  }

  /**
   * DonationRequestment updateManyAndReturn
   */
  export type DonationRequestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * The data used to update DonationRequestments.
     */
    data: XOR<DonationRequestmentUpdateManyMutationInput, DonationRequestmentUncheckedUpdateManyInput>
    /**
     * Filter which DonationRequestments to update
     */
    where?: DonationRequestmentWhereInput
    /**
     * Limit how many DonationRequestments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DonationRequestment upsert
   */
  export type DonationRequestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the DonationRequestment to update in case it exists.
     */
    where: DonationRequestmentWhereUniqueInput
    /**
     * In case the DonationRequestment found by the `where` argument doesn't exist, create a new DonationRequestment with this data.
     */
    create: XOR<DonationRequestmentCreateInput, DonationRequestmentUncheckedCreateInput>
    /**
     * In case the DonationRequestment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationRequestmentUpdateInput, DonationRequestmentUncheckedUpdateInput>
  }

  /**
   * DonationRequestment delete
   */
  export type DonationRequestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    /**
     * Filter which DonationRequestment to delete.
     */
    where: DonationRequestmentWhereUniqueInput
  }

  /**
   * DonationRequestment deleteMany
   */
  export type DonationRequestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationRequestments to delete
     */
    where?: DonationRequestmentWhereInput
    /**
     * Limit how many DonationRequestments to delete.
     */
    limit?: number
  }

  /**
   * DonationRequestment.chatRoom
   */
  export type DonationRequestment$chatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
  }

  /**
   * DonationRequestment without action
   */
  export type DonationRequestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
  }


  /**
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    email: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    email: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    email?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    email: string
    token: string
    expiresAt: Date
    createdAt: Date
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    email?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["token"]>

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly email: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    isActive: boolean | null
    isDonate: boolean | null
    isPhotoId: boolean | null
    tokenFcm: string | null
    identificationNumber: string | null
    photoKtp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    isActive: boolean | null
    isDonate: boolean | null
    isPhotoId: boolean | null
    tokenFcm: string | null
    identificationNumber: string | null
    photoKtp: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    password: number
    isActive: number
    isDonate: number
    isPhotoId: number
    tokenFcm: number
    identificationNumber: number
    photoKtp: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isDonate?: true
    isPhotoId?: true
    tokenFcm?: true
    identificationNumber?: true
    photoKtp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isDonate?: true
    isPhotoId?: true
    tokenFcm?: true
    identificationNumber?: true
    photoKtp?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    isActive?: true
    isDonate?: true
    isPhotoId?: true
    tokenFcm?: true
    identificationNumber?: true
    photoKtp?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    role: string | null
    password: string | null
    isActive: boolean
    isDonate: boolean
    isPhotoId: boolean
    tokenFcm: string | null
    identificationNumber: string | null
    photoKtp: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: boolean
    identificationNumber?: boolean
    photoKtp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    readMessages?: boolean | User$readMessagesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: boolean
    identificationNumber?: boolean
    photoKtp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: boolean
    identificationNumber?: boolean
    photoKtp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: boolean
    identificationNumber?: boolean
    photoKtp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "password" | "isActive" | "isDonate" | "isPhotoId" | "tokenFcm" | "identificationNumber" | "photoKtp" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    readMessages?: boolean | User$readMessagesArgs<ExtArgs>
    rooms?: boolean | User$roomsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentMessages: Prisma.$ChatPayload<ExtArgs>[]
      readMessages: Prisma.$ChatPayload<ExtArgs>[]
      rooms: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      role: string | null
      password: string | null
      isActive: boolean
      isDonate: boolean
      isPhotoId: boolean
      tokenFcm: string | null
      identificationNumber: string | null
      photoKtp: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readMessages<T extends User$readMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$readMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends User$roomsArgs<ExtArgs> = {}>(args?: Subset<T, User$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isDonate: FieldRef<"User", 'Boolean'>
    readonly isPhotoId: FieldRef<"User", 'Boolean'>
    readonly tokenFcm: FieldRef<"User", 'String'>
    readonly identificationNumber: FieldRef<"User", 'String'>
    readonly photoKtp: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.readMessages
   */
  export type User$readMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.rooms
   */
  export type User$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomAvgAggregateOutputType = {
    unreadCount: number | null
  }

  export type ChatRoomSumAggregateOutputType = {
    unreadCount: number | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    donationRequestId: string | null
    fulfillmentId: string | null
    requestmentId: string | null
    isActive: boolean | null
    lastMessage: string | null
    lastSeen: Date | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    donationRequestId: string | null
    fulfillmentId: string | null
    requestmentId: string | null
    isActive: boolean | null
    lastMessage: string | null
    lastSeen: Date | null
    unreadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    roomId: number
    donationRequestId: number
    fulfillmentId: number
    requestmentId: number
    isActive: number
    lastMessage: number
    lastSeen: number
    unreadCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatRoomAvgAggregateInputType = {
    unreadCount?: true
  }

  export type ChatRoomSumAggregateInputType = {
    unreadCount?: true
  }

  export type ChatRoomMinAggregateInputType = {
    id?: true
    roomId?: true
    donationRequestId?: true
    fulfillmentId?: true
    requestmentId?: true
    isActive?: true
    lastMessage?: true
    lastSeen?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    roomId?: true
    donationRequestId?: true
    fulfillmentId?: true
    requestmentId?: true
    isActive?: true
    lastMessage?: true
    lastSeen?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    roomId?: true
    donationRequestId?: true
    fulfillmentId?: true
    requestmentId?: true
    isActive?: true
    lastMessage?: true
    lastSeen?: true
    unreadCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatRoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatRoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _avg?: ChatRoomAvgAggregateInputType
    _sum?: ChatRoomSumAggregateInputType
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    roomId: string
    donationRequestId: string
    fulfillmentId: string | null
    requestmentId: string | null
    isActive: boolean
    lastMessage: string
    lastSeen: Date
    unreadCount: number
    createdAt: Date
    updatedAt: Date
    _count: ChatRoomCountAggregateOutputType | null
    _avg: ChatRoomAvgAggregateOutputType | null
    _sum: ChatRoomSumAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    donationRequestId?: boolean
    fulfillmentId?: boolean
    requestmentId?: boolean
    isActive?: boolean
    lastMessage?: boolean
    lastSeen?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
    members?: boolean | ChatRoom$membersArgs<ExtArgs>
    chats?: boolean | ChatRoom$chatsArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    donationRequestId?: boolean
    fulfillmentId?: boolean
    requestmentId?: boolean
    isActive?: boolean
    lastMessage?: boolean
    lastSeen?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    donationRequestId?: boolean
    fulfillmentId?: boolean
    requestmentId?: boolean
    isActive?: boolean
    lastMessage?: boolean
    lastSeen?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    roomId?: boolean
    donationRequestId?: boolean
    fulfillmentId?: boolean
    requestmentId?: boolean
    isActive?: boolean
    lastMessage?: boolean
    lastSeen?: boolean
    unreadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "donationRequestId" | "fulfillmentId" | "requestmentId" | "isActive" | "lastMessage" | "lastSeen" | "unreadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
    members?: boolean | ChatRoom$membersArgs<ExtArgs>
    chats?: boolean | ChatRoom$chatsArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    donation?: boolean | DonationRequestDefaultArgs<ExtArgs>
    fulfillment?: boolean | ChatRoom$fulfillmentArgs<ExtArgs>
    requestment?: boolean | ChatRoom$requestmentArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      donation: Prisma.$DonationRequestPayload<ExtArgs>
      fulfillment: Prisma.$DonationFulfillmentPayload<ExtArgs> | null
      requestment: Prisma.$DonationRequestmentPayload<ExtArgs> | null
      members: Prisma.$ChatRoomMemberPayload<ExtArgs>[]
      chats: Prisma.$ChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      donationRequestId: string
      fulfillmentId: string | null
      requestmentId: string | null
      isActive: boolean
      lastMessage: string
      lastSeen: Date
      unreadCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    donation<T extends DonationRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DonationRequestDefaultArgs<ExtArgs>>): Prisma__DonationRequestClient<$Result.GetResult<Prisma.$DonationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fulfillment<T extends ChatRoom$fulfillmentArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$fulfillmentArgs<ExtArgs>>): Prisma__DonationFulfillmentClient<$Result.GetResult<Prisma.$DonationFulfillmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    requestment<T extends ChatRoom$requestmentArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$requestmentArgs<ExtArgs>>): Prisma__DonationRequestmentClient<$Result.GetResult<Prisma.$DonationRequestmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends ChatRoom$membersArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats<T extends ChatRoom$chatsArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly roomId: FieldRef<"ChatRoom", 'String'>
    readonly donationRequestId: FieldRef<"ChatRoom", 'String'>
    readonly fulfillmentId: FieldRef<"ChatRoom", 'String'>
    readonly requestmentId: FieldRef<"ChatRoom", 'String'>
    readonly isActive: FieldRef<"ChatRoom", 'Boolean'>
    readonly lastMessage: FieldRef<"ChatRoom", 'String'>
    readonly lastSeen: FieldRef<"ChatRoom", 'DateTime'>
    readonly unreadCount: FieldRef<"ChatRoom", 'Int'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.fulfillment
   */
  export type ChatRoom$fulfillmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationFulfillment
     */
    select?: DonationFulfillmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationFulfillment
     */
    omit?: DonationFulfillmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationFulfillmentInclude<ExtArgs> | null
    where?: DonationFulfillmentWhereInput
  }

  /**
   * ChatRoom.requestment
   */
  export type ChatRoom$requestmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationRequestment
     */
    select?: DonationRequestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationRequestment
     */
    omit?: DonationRequestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationRequestmentInclude<ExtArgs> | null
    where?: DonationRequestmentWhereInput
  }

  /**
   * ChatRoom.members
   */
  export type ChatRoom$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    cursor?: ChatRoomMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoom.chats
   */
  export type ChatRoom$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoomMember
   */

  export type AggregateChatRoomMember = {
    _count: ChatRoomMemberCountAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  export type ChatRoomMemberMinAggregateOutputType = {
    userId: string | null
    roomId: string | null
    joinedAt: Date | null
  }

  export type ChatRoomMemberMaxAggregateOutputType = {
    userId: string | null
    roomId: string | null
    joinedAt: Date | null
  }

  export type ChatRoomMemberCountAggregateOutputType = {
    userId: number
    roomId: number
    joinedAt: number
    _all: number
  }


  export type ChatRoomMemberMinAggregateInputType = {
    userId?: true
    roomId?: true
    joinedAt?: true
  }

  export type ChatRoomMemberMaxAggregateInputType = {
    userId?: true
    roomId?: true
    joinedAt?: true
  }

  export type ChatRoomMemberCountAggregateInputType = {
    userId?: true
    roomId?: true
    joinedAt?: true
    _all?: true
  }

  export type ChatRoomMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMember to aggregate.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRoomMembers
    **/
    _count?: true | ChatRoomMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type GetChatRoomMemberAggregateType<T extends ChatRoomMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoomMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoomMember[P]>
      : GetScalarType<T[P], AggregateChatRoomMember[P]>
  }




  export type ChatRoomMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomMemberWhereInput
    orderBy?: ChatRoomMemberOrderByWithAggregationInput | ChatRoomMemberOrderByWithAggregationInput[]
    by: ChatRoomMemberScalarFieldEnum[] | ChatRoomMemberScalarFieldEnum
    having?: ChatRoomMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomMemberCountAggregateInputType | true
    _min?: ChatRoomMemberMinAggregateInputType
    _max?: ChatRoomMemberMaxAggregateInputType
  }

  export type ChatRoomMemberGroupByOutputType = {
    userId: string
    roomId: string
    joinedAt: Date
    _count: ChatRoomMemberCountAggregateOutputType | null
    _min: ChatRoomMemberMinAggregateOutputType | null
    _max: ChatRoomMemberMaxAggregateOutputType | null
  }

  type GetChatRoomMemberGroupByPayload<T extends ChatRoomMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomMemberGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoomMember"]>

  export type ChatRoomMemberSelectScalar = {
    userId?: boolean
    roomId?: boolean
    joinedAt?: boolean
  }

  export type ChatRoomMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roomId" | "joinedAt", ExtArgs["result"]["chatRoomMember"]>
  export type ChatRoomMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }
  export type ChatRoomMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }
  export type ChatRoomMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
  }

  export type $ChatRoomMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoomMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$ChatRoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roomId: string
      joinedAt: Date
    }, ExtArgs["result"]["chatRoomMember"]>
    composites: {}
  }

  type ChatRoomMemberGetPayload<S extends boolean | null | undefined | ChatRoomMemberDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomMemberPayload, S>

  type ChatRoomMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomMemberCountAggregateInputType | true
    }

  export interface ChatRoomMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoomMember'], meta: { name: 'ChatRoomMember' } }
    /**
     * Find zero or one ChatRoomMember that matches the filter.
     * @param {ChatRoomMemberFindUniqueArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomMemberFindUniqueArgs>(args: SelectSubset<T, ChatRoomMemberFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoomMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomMemberFindUniqueOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoomMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomMemberFindFirstArgs>(args?: SelectSubset<T, ChatRoomMemberFindFirstArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoomMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindFirstOrThrowArgs} args - Arguments to find a ChatRoomMember
     * @example
     * // Get one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRoomMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany()
     * 
     * // Get first 10 ChatRoomMembers
     * const chatRoomMembers = await prisma.chatRoomMember.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const chatRoomMemberWithUserIdOnly = await prisma.chatRoomMember.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ChatRoomMemberFindManyArgs>(args?: SelectSubset<T, ChatRoomMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoomMember.
     * @param {ChatRoomMemberCreateArgs} args - Arguments to create a ChatRoomMember.
     * @example
     * // Create one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.create({
     *   data: {
     *     // ... data to create a ChatRoomMember
     *   }
     * })
     * 
     */
    create<T extends ChatRoomMemberCreateArgs>(args: SelectSubset<T, ChatRoomMemberCreateArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRoomMembers.
     * @param {ChatRoomMemberCreateManyArgs} args - Arguments to create many ChatRoomMembers.
     * @example
     * // Create many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomMemberCreateManyArgs>(args?: SelectSubset<T, ChatRoomMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRoomMembers and returns the data saved in the database.
     * @param {ChatRoomMemberCreateManyAndReturnArgs} args - Arguments to create many ChatRoomMembers.
     * @example
     * // Create many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRoomMembers and only return the `userId`
     * const chatRoomMemberWithUserIdOnly = await prisma.chatRoomMember.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoomMember.
     * @param {ChatRoomMemberDeleteArgs} args - Arguments to delete one ChatRoomMember.
     * @example
     * // Delete one ChatRoomMember
     * const ChatRoomMember = await prisma.chatRoomMember.delete({
     *   where: {
     *     // ... filter to delete one ChatRoomMember
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomMemberDeleteArgs>(args: SelectSubset<T, ChatRoomMemberDeleteArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoomMember.
     * @param {ChatRoomMemberUpdateArgs} args - Arguments to update one ChatRoomMember.
     * @example
     * // Update one ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomMemberUpdateArgs>(args: SelectSubset<T, ChatRoomMemberUpdateArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRoomMembers.
     * @param {ChatRoomMemberDeleteManyArgs} args - Arguments to filter ChatRoomMembers to delete.
     * @example
     * // Delete a few ChatRoomMembers
     * const { count } = await prisma.chatRoomMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomMemberDeleteManyArgs>(args?: SelectSubset<T, ChatRoomMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomMemberUpdateManyArgs>(args: SelectSubset<T, ChatRoomMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRoomMembers and returns the data updated in the database.
     * @param {ChatRoomMemberUpdateManyAndReturnArgs} args - Arguments to update many ChatRoomMembers.
     * @example
     * // Update many ChatRoomMembers
     * const chatRoomMember = await prisma.chatRoomMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRoomMembers and only return the `userId`
     * const chatRoomMemberWithUserIdOnly = await prisma.chatRoomMember.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoomMember.
     * @param {ChatRoomMemberUpsertArgs} args - Arguments to update or create a ChatRoomMember.
     * @example
     * // Update or create a ChatRoomMember
     * const chatRoomMember = await prisma.chatRoomMember.upsert({
     *   create: {
     *     // ... data to create a ChatRoomMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoomMember we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomMemberUpsertArgs>(args: SelectSubset<T, ChatRoomMemberUpsertArgs<ExtArgs>>): Prisma__ChatRoomMemberClient<$Result.GetResult<Prisma.$ChatRoomMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRoomMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberCountArgs} args - Arguments to filter ChatRoomMembers to count.
     * @example
     * // Count the number of ChatRoomMembers
     * const count = await prisma.chatRoomMember.count({
     *   where: {
     *     // ... the filter for the ChatRoomMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomMemberCountArgs>(
      args?: Subset<T, ChatRoomMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomMemberAggregateArgs>(args: Subset<T, ChatRoomMemberAggregateArgs>): Prisma.PrismaPromise<GetChatRoomMemberAggregateType<T>>

    /**
     * Group by ChatRoomMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomMemberGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoomMember model
   */
  readonly fields: ChatRoomMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoomMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoomMember model
   */
  interface ChatRoomMemberFieldRefs {
    readonly userId: FieldRef<"ChatRoomMember", 'String'>
    readonly roomId: FieldRef<"ChatRoomMember", 'String'>
    readonly joinedAt: FieldRef<"ChatRoomMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoomMember findUnique
   */
  export type ChatRoomMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember findUniqueOrThrow
   */
  export type ChatRoomMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember findFirst
   */
  export type ChatRoomMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember findFirstOrThrow
   */
  export type ChatRoomMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMember to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRoomMembers.
     */
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember findMany
   */
  export type ChatRoomMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoomMembers to fetch.
     */
    where?: ChatRoomMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRoomMembers to fetch.
     */
    orderBy?: ChatRoomMemberOrderByWithRelationInput | ChatRoomMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRoomMembers.
     */
    cursor?: ChatRoomMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRoomMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRoomMembers.
     */
    skip?: number
    distinct?: ChatRoomMemberScalarFieldEnum | ChatRoomMemberScalarFieldEnum[]
  }

  /**
   * ChatRoomMember create
   */
  export type ChatRoomMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
  }

  /**
   * ChatRoomMember createMany
   */
  export type ChatRoomMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRoomMembers.
     */
    data: ChatRoomMemberCreateManyInput | ChatRoomMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoomMember createManyAndReturn
   */
  export type ChatRoomMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRoomMembers.
     */
    data: ChatRoomMemberCreateManyInput | ChatRoomMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoomMember update
   */
  export type ChatRoomMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoomMember.
     */
    data: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
    /**
     * Choose, which ChatRoomMember to update.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember updateMany
   */
  export type ChatRoomMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRoomMembers.
     */
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatRoomMembers to update
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to update.
     */
    limit?: number
  }

  /**
   * ChatRoomMember updateManyAndReturn
   */
  export type ChatRoomMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * The data used to update ChatRoomMembers.
     */
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyInput>
    /**
     * Filter which ChatRoomMembers to update
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoomMember upsert
   */
  export type ChatRoomMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoomMember to update in case it exists.
     */
    where: ChatRoomMemberWhereUniqueInput
    /**
     * In case the ChatRoomMember found by the `where` argument doesn't exist, create a new ChatRoomMember with this data.
     */
    create: XOR<ChatRoomMemberCreateInput, ChatRoomMemberUncheckedCreateInput>
    /**
     * In case the ChatRoomMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomMemberUpdateInput, ChatRoomMemberUncheckedUpdateInput>
  }

  /**
   * ChatRoomMember delete
   */
  export type ChatRoomMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
    /**
     * Filter which ChatRoomMember to delete.
     */
    where: ChatRoomMemberWhereUniqueInput
  }

  /**
   * ChatRoomMember deleteMany
   */
  export type ChatRoomMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoomMembers to delete
     */
    where?: ChatRoomMemberWhereInput
    /**
     * Limit how many ChatRoomMembers to delete.
     */
    limit?: number
  }

  /**
   * ChatRoomMember without action
   */
  export type ChatRoomMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomMember
     */
    select?: ChatRoomMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoomMember
     */
    omit?: ChatRoomMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomMemberInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    senderId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    roomId: number
    senderId: number
    message: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    roomId?: true
    senderId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    roomId: string
    senderId: string
    message: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    readBy?: boolean | Chat$readByArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    roomId?: boolean
    senderId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "senderId" | "message" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    readBy?: boolean | Chat$readByArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | ChatRoomDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      room: Prisma.$ChatRoomPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      readBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      senderId: string
      message: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends ChatRoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoomDefaultArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readBy<T extends Chat$readByArgs<ExtArgs> = {}>(args?: Subset<T, Chat$readByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly roomId: FieldRef<"Chat", 'String'>
    readonly senderId: FieldRef<"Chat", 'String'>
    readonly message: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.readBy
   */
  export type Chat$readByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model FundDonationHistory
   */

  export type AggregateFundDonationHistory = {
    _count: FundDonationHistoryCountAggregateOutputType | null
    _avg: FundDonationHistoryAvgAggregateOutputType | null
    _sum: FundDonationHistorySumAggregateOutputType | null
    _min: FundDonationHistoryMinAggregateOutputType | null
    _max: FundDonationHistoryMaxAggregateOutputType | null
  }

  export type FundDonationHistoryAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type FundDonationHistorySumAggregateOutputType = {
    amount: Decimal | null
  }

  export type FundDonationHistoryMinAggregateOutputType = {
    id: string | null
    requestorFirebaseId: string | null
    donatorName: string | null
    donatorDateTime: Date | null
    amount: Decimal | null
    paymentProcess: string | null
  }

  export type FundDonationHistoryMaxAggregateOutputType = {
    id: string | null
    requestorFirebaseId: string | null
    donatorName: string | null
    donatorDateTime: Date | null
    amount: Decimal | null
    paymentProcess: string | null
  }

  export type FundDonationHistoryCountAggregateOutputType = {
    id: number
    requestorFirebaseId: number
    donatorName: number
    donatorDateTime: number
    amount: number
    paymentProcess: number
    _all: number
  }


  export type FundDonationHistoryAvgAggregateInputType = {
    amount?: true
  }

  export type FundDonationHistorySumAggregateInputType = {
    amount?: true
  }

  export type FundDonationHistoryMinAggregateInputType = {
    id?: true
    requestorFirebaseId?: true
    donatorName?: true
    donatorDateTime?: true
    amount?: true
    paymentProcess?: true
  }

  export type FundDonationHistoryMaxAggregateInputType = {
    id?: true
    requestorFirebaseId?: true
    donatorName?: true
    donatorDateTime?: true
    amount?: true
    paymentProcess?: true
  }

  export type FundDonationHistoryCountAggregateInputType = {
    id?: true
    requestorFirebaseId?: true
    donatorName?: true
    donatorDateTime?: true
    amount?: true
    paymentProcess?: true
    _all?: true
  }

  export type FundDonationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundDonationHistory to aggregate.
     */
    where?: FundDonationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundDonationHistories to fetch.
     */
    orderBy?: FundDonationHistoryOrderByWithRelationInput | FundDonationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundDonationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundDonationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundDonationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundDonationHistories
    **/
    _count?: true | FundDonationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundDonationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundDonationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundDonationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundDonationHistoryMaxAggregateInputType
  }

  export type GetFundDonationHistoryAggregateType<T extends FundDonationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFundDonationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundDonationHistory[P]>
      : GetScalarType<T[P], AggregateFundDonationHistory[P]>
  }




  export type FundDonationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundDonationHistoryWhereInput
    orderBy?: FundDonationHistoryOrderByWithAggregationInput | FundDonationHistoryOrderByWithAggregationInput[]
    by: FundDonationHistoryScalarFieldEnum[] | FundDonationHistoryScalarFieldEnum
    having?: FundDonationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundDonationHistoryCountAggregateInputType | true
    _avg?: FundDonationHistoryAvgAggregateInputType
    _sum?: FundDonationHistorySumAggregateInputType
    _min?: FundDonationHistoryMinAggregateInputType
    _max?: FundDonationHistoryMaxAggregateInputType
  }

  export type FundDonationHistoryGroupByOutputType = {
    id: string
    requestorFirebaseId: string
    donatorName: string
    donatorDateTime: Date
    amount: Decimal
    paymentProcess: string
    _count: FundDonationHistoryCountAggregateOutputType | null
    _avg: FundDonationHistoryAvgAggregateOutputType | null
    _sum: FundDonationHistorySumAggregateOutputType | null
    _min: FundDonationHistoryMinAggregateOutputType | null
    _max: FundDonationHistoryMaxAggregateOutputType | null
  }

  type GetFundDonationHistoryGroupByPayload<T extends FundDonationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundDonationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundDonationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundDonationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], FundDonationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type FundDonationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestorFirebaseId?: boolean
    donatorName?: boolean
    donatorDateTime?: boolean
    amount?: boolean
    paymentProcess?: boolean
  }, ExtArgs["result"]["fundDonationHistory"]>

  export type FundDonationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestorFirebaseId?: boolean
    donatorName?: boolean
    donatorDateTime?: boolean
    amount?: boolean
    paymentProcess?: boolean
  }, ExtArgs["result"]["fundDonationHistory"]>

  export type FundDonationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestorFirebaseId?: boolean
    donatorName?: boolean
    donatorDateTime?: boolean
    amount?: boolean
    paymentProcess?: boolean
  }, ExtArgs["result"]["fundDonationHistory"]>

  export type FundDonationHistorySelectScalar = {
    id?: boolean
    requestorFirebaseId?: boolean
    donatorName?: boolean
    donatorDateTime?: boolean
    amount?: boolean
    paymentProcess?: boolean
  }

  export type FundDonationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestorFirebaseId" | "donatorName" | "donatorDateTime" | "amount" | "paymentProcess", ExtArgs["result"]["fundDonationHistory"]>

  export type $FundDonationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundDonationHistory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestorFirebaseId: string
      donatorName: string
      donatorDateTime: Date
      amount: Prisma.Decimal
      paymentProcess: string
    }, ExtArgs["result"]["fundDonationHistory"]>
    composites: {}
  }

  type FundDonationHistoryGetPayload<S extends boolean | null | undefined | FundDonationHistoryDefaultArgs> = $Result.GetResult<Prisma.$FundDonationHistoryPayload, S>

  type FundDonationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundDonationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundDonationHistoryCountAggregateInputType | true
    }

  export interface FundDonationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundDonationHistory'], meta: { name: 'FundDonationHistory' } }
    /**
     * Find zero or one FundDonationHistory that matches the filter.
     * @param {FundDonationHistoryFindUniqueArgs} args - Arguments to find a FundDonationHistory
     * @example
     * // Get one FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundDonationHistoryFindUniqueArgs>(args: SelectSubset<T, FundDonationHistoryFindUniqueArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FundDonationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundDonationHistoryFindUniqueOrThrowArgs} args - Arguments to find a FundDonationHistory
     * @example
     * // Get one FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundDonationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FundDonationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundDonationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryFindFirstArgs} args - Arguments to find a FundDonationHistory
     * @example
     * // Get one FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundDonationHistoryFindFirstArgs>(args?: SelectSubset<T, FundDonationHistoryFindFirstArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FundDonationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryFindFirstOrThrowArgs} args - Arguments to find a FundDonationHistory
     * @example
     * // Get one FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundDonationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FundDonationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FundDonationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundDonationHistories
     * const fundDonationHistories = await prisma.fundDonationHistory.findMany()
     * 
     * // Get first 10 FundDonationHistories
     * const fundDonationHistories = await prisma.fundDonationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundDonationHistoryWithIdOnly = await prisma.fundDonationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundDonationHistoryFindManyArgs>(args?: SelectSubset<T, FundDonationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FundDonationHistory.
     * @param {FundDonationHistoryCreateArgs} args - Arguments to create a FundDonationHistory.
     * @example
     * // Create one FundDonationHistory
     * const FundDonationHistory = await prisma.fundDonationHistory.create({
     *   data: {
     *     // ... data to create a FundDonationHistory
     *   }
     * })
     * 
     */
    create<T extends FundDonationHistoryCreateArgs>(args: SelectSubset<T, FundDonationHistoryCreateArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FundDonationHistories.
     * @param {FundDonationHistoryCreateManyArgs} args - Arguments to create many FundDonationHistories.
     * @example
     * // Create many FundDonationHistories
     * const fundDonationHistory = await prisma.fundDonationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundDonationHistoryCreateManyArgs>(args?: SelectSubset<T, FundDonationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FundDonationHistories and returns the data saved in the database.
     * @param {FundDonationHistoryCreateManyAndReturnArgs} args - Arguments to create many FundDonationHistories.
     * @example
     * // Create many FundDonationHistories
     * const fundDonationHistory = await prisma.fundDonationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FundDonationHistories and only return the `id`
     * const fundDonationHistoryWithIdOnly = await prisma.fundDonationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundDonationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FundDonationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FundDonationHistory.
     * @param {FundDonationHistoryDeleteArgs} args - Arguments to delete one FundDonationHistory.
     * @example
     * // Delete one FundDonationHistory
     * const FundDonationHistory = await prisma.fundDonationHistory.delete({
     *   where: {
     *     // ... filter to delete one FundDonationHistory
     *   }
     * })
     * 
     */
    delete<T extends FundDonationHistoryDeleteArgs>(args: SelectSubset<T, FundDonationHistoryDeleteArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FundDonationHistory.
     * @param {FundDonationHistoryUpdateArgs} args - Arguments to update one FundDonationHistory.
     * @example
     * // Update one FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundDonationHistoryUpdateArgs>(args: SelectSubset<T, FundDonationHistoryUpdateArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FundDonationHistories.
     * @param {FundDonationHistoryDeleteManyArgs} args - Arguments to filter FundDonationHistories to delete.
     * @example
     * // Delete a few FundDonationHistories
     * const { count } = await prisma.fundDonationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundDonationHistoryDeleteManyArgs>(args?: SelectSubset<T, FundDonationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundDonationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundDonationHistories
     * const fundDonationHistory = await prisma.fundDonationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundDonationHistoryUpdateManyArgs>(args: SelectSubset<T, FundDonationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundDonationHistories and returns the data updated in the database.
     * @param {FundDonationHistoryUpdateManyAndReturnArgs} args - Arguments to update many FundDonationHistories.
     * @example
     * // Update many FundDonationHistories
     * const fundDonationHistory = await prisma.fundDonationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FundDonationHistories and only return the `id`
     * const fundDonationHistoryWithIdOnly = await prisma.fundDonationHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FundDonationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FundDonationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FundDonationHistory.
     * @param {FundDonationHistoryUpsertArgs} args - Arguments to update or create a FundDonationHistory.
     * @example
     * // Update or create a FundDonationHistory
     * const fundDonationHistory = await prisma.fundDonationHistory.upsert({
     *   create: {
     *     // ... data to create a FundDonationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundDonationHistory we want to update
     *   }
     * })
     */
    upsert<T extends FundDonationHistoryUpsertArgs>(args: SelectSubset<T, FundDonationHistoryUpsertArgs<ExtArgs>>): Prisma__FundDonationHistoryClient<$Result.GetResult<Prisma.$FundDonationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FundDonationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryCountArgs} args - Arguments to filter FundDonationHistories to count.
     * @example
     * // Count the number of FundDonationHistories
     * const count = await prisma.fundDonationHistory.count({
     *   where: {
     *     // ... the filter for the FundDonationHistories we want to count
     *   }
     * })
    **/
    count<T extends FundDonationHistoryCountArgs>(
      args?: Subset<T, FundDonationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundDonationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundDonationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundDonationHistoryAggregateArgs>(args: Subset<T, FundDonationHistoryAggregateArgs>): Prisma.PrismaPromise<GetFundDonationHistoryAggregateType<T>>

    /**
     * Group by FundDonationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundDonationHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundDonationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundDonationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: FundDonationHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundDonationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundDonationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundDonationHistory model
   */
  readonly fields: FundDonationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundDonationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundDonationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FundDonationHistory model
   */
  interface FundDonationHistoryFieldRefs {
    readonly id: FieldRef<"FundDonationHistory", 'String'>
    readonly requestorFirebaseId: FieldRef<"FundDonationHistory", 'String'>
    readonly donatorName: FieldRef<"FundDonationHistory", 'String'>
    readonly donatorDateTime: FieldRef<"FundDonationHistory", 'DateTime'>
    readonly amount: FieldRef<"FundDonationHistory", 'Decimal'>
    readonly paymentProcess: FieldRef<"FundDonationHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FundDonationHistory findUnique
   */
  export type FundDonationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which FundDonationHistory to fetch.
     */
    where: FundDonationHistoryWhereUniqueInput
  }

  /**
   * FundDonationHistory findUniqueOrThrow
   */
  export type FundDonationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which FundDonationHistory to fetch.
     */
    where: FundDonationHistoryWhereUniqueInput
  }

  /**
   * FundDonationHistory findFirst
   */
  export type FundDonationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which FundDonationHistory to fetch.
     */
    where?: FundDonationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundDonationHistories to fetch.
     */
    orderBy?: FundDonationHistoryOrderByWithRelationInput | FundDonationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundDonationHistories.
     */
    cursor?: FundDonationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundDonationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundDonationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundDonationHistories.
     */
    distinct?: FundDonationHistoryScalarFieldEnum | FundDonationHistoryScalarFieldEnum[]
  }

  /**
   * FundDonationHistory findFirstOrThrow
   */
  export type FundDonationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which FundDonationHistory to fetch.
     */
    where?: FundDonationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundDonationHistories to fetch.
     */
    orderBy?: FundDonationHistoryOrderByWithRelationInput | FundDonationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundDonationHistories.
     */
    cursor?: FundDonationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundDonationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundDonationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundDonationHistories.
     */
    distinct?: FundDonationHistoryScalarFieldEnum | FundDonationHistoryScalarFieldEnum[]
  }

  /**
   * FundDonationHistory findMany
   */
  export type FundDonationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter, which FundDonationHistories to fetch.
     */
    where?: FundDonationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundDonationHistories to fetch.
     */
    orderBy?: FundDonationHistoryOrderByWithRelationInput | FundDonationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundDonationHistories.
     */
    cursor?: FundDonationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundDonationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundDonationHistories.
     */
    skip?: number
    distinct?: FundDonationHistoryScalarFieldEnum | FundDonationHistoryScalarFieldEnum[]
  }

  /**
   * FundDonationHistory create
   */
  export type FundDonationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * The data needed to create a FundDonationHistory.
     */
    data: XOR<FundDonationHistoryCreateInput, FundDonationHistoryUncheckedCreateInput>
  }

  /**
   * FundDonationHistory createMany
   */
  export type FundDonationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundDonationHistories.
     */
    data: FundDonationHistoryCreateManyInput | FundDonationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundDonationHistory createManyAndReturn
   */
  export type FundDonationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many FundDonationHistories.
     */
    data: FundDonationHistoryCreateManyInput | FundDonationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundDonationHistory update
   */
  export type FundDonationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * The data needed to update a FundDonationHistory.
     */
    data: XOR<FundDonationHistoryUpdateInput, FundDonationHistoryUncheckedUpdateInput>
    /**
     * Choose, which FundDonationHistory to update.
     */
    where: FundDonationHistoryWhereUniqueInput
  }

  /**
   * FundDonationHistory updateMany
   */
  export type FundDonationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundDonationHistories.
     */
    data: XOR<FundDonationHistoryUpdateManyMutationInput, FundDonationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FundDonationHistories to update
     */
    where?: FundDonationHistoryWhereInput
    /**
     * Limit how many FundDonationHistories to update.
     */
    limit?: number
  }

  /**
   * FundDonationHistory updateManyAndReturn
   */
  export type FundDonationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update FundDonationHistories.
     */
    data: XOR<FundDonationHistoryUpdateManyMutationInput, FundDonationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which FundDonationHistories to update
     */
    where?: FundDonationHistoryWhereInput
    /**
     * Limit how many FundDonationHistories to update.
     */
    limit?: number
  }

  /**
   * FundDonationHistory upsert
   */
  export type FundDonationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * The filter to search for the FundDonationHistory to update in case it exists.
     */
    where: FundDonationHistoryWhereUniqueInput
    /**
     * In case the FundDonationHistory found by the `where` argument doesn't exist, create a new FundDonationHistory with this data.
     */
    create: XOR<FundDonationHistoryCreateInput, FundDonationHistoryUncheckedCreateInput>
    /**
     * In case the FundDonationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundDonationHistoryUpdateInput, FundDonationHistoryUncheckedUpdateInput>
  }

  /**
   * FundDonationHistory delete
   */
  export type FundDonationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
    /**
     * Filter which FundDonationHistory to delete.
     */
    where: FundDonationHistoryWhereUniqueInput
  }

  /**
   * FundDonationHistory deleteMany
   */
  export type FundDonationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundDonationHistories to delete
     */
    where?: FundDonationHistoryWhereInput
    /**
     * Limit how many FundDonationHistories to delete.
     */
    limit?: number
  }

  /**
   * FundDonationHistory without action
   */
  export type FundDonationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundDonationHistory
     */
    select?: FundDonationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FundDonationHistory
     */
    omit?: FundDonationHistoryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TermsConditionScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TermsConditionScalarFieldEnum = (typeof TermsConditionScalarFieldEnum)[keyof typeof TermsConditionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    notification: 'notification',
    uuid: 'uuid',
    userid: 'userid',
    notifType: 'notifType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    targetAmount: 'targetAmount',
    currentAmount: 'currentAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorFirebaseId: 'creatorFirebaseId'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const DonationRequestScalarFieldEnum: {
    id: 'id',
    namaBarang: 'namaBarang',
    requestorFirebaseId: 'requestorFirebaseId',
    requestorName: 'requestorName',
    donationType: 'donationType',
    detailBarang: 'detailBarang',
    alasanDonasi: 'alasanDonasi',
    locationDescription: 'locationDescription',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    description: 'description',
    itemType: 'itemType',
    itemWeight: 'itemWeight',
    weightUnit: 'weightUnit',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiredAt: 'expiredAt'
  };

  export type DonationRequestScalarFieldEnum = (typeof DonationRequestScalarFieldEnum)[keyof typeof DonationRequestScalarFieldEnum]


  export const PhotoDonationScalarFieldEnum: {
    id: 'id',
    imageFile: 'imageFile',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    donationRequestId: 'donationRequestId'
  };

  export type PhotoDonationScalarFieldEnum = (typeof PhotoDonationScalarFieldEnum)[keyof typeof PhotoDonationScalarFieldEnum]


  export const DonationFulfillmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    donorFirebaseId: 'donorFirebaseId',
    donorRequestFirebaseId: 'donorRequestFirebaseId',
    donorName: 'donorName',
    donorNotes: 'donorNotes',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    city: 'city',
    status: 'status',
    donationRequestId: 'donationRequestId'
  };

  export type DonationFulfillmentScalarFieldEnum = (typeof DonationFulfillmentScalarFieldEnum)[keyof typeof DonationFulfillmentScalarFieldEnum]


  export const DonationRequestmentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    requestorId: 'requestorId',
    donorFirebaseId: 'donorFirebaseId',
    status: 'status',
    donorName: 'donorName',
    reason: 'reason',
    latitude: 'latitude',
    longitude: 'longitude',
    address: 'address',
    city: 'city',
    donationRequestId: 'donationRequestId'
  };

  export type DonationRequestmentScalarFieldEnum = (typeof DonationRequestmentScalarFieldEnum)[keyof typeof DonationRequestmentScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    email: 'email',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    isActive: 'isActive',
    isDonate: 'isDonate',
    isPhotoId: 'isPhotoId',
    tokenFcm: 'tokenFcm',
    identificationNumber: 'identificationNumber',
    photoKtp: 'photoKtp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    donationRequestId: 'donationRequestId',
    fulfillmentId: 'fulfillmentId',
    requestmentId: 'requestmentId',
    isActive: 'isActive',
    lastMessage: 'lastMessage',
    lastSeen: 'lastSeen',
    unreadCount: 'unreadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatRoomMemberScalarFieldEnum: {
    userId: 'userId',
    roomId: 'roomId',
    joinedAt: 'joinedAt'
  };

  export type ChatRoomMemberScalarFieldEnum = (typeof ChatRoomMemberScalarFieldEnum)[keyof typeof ChatRoomMemberScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    senderId: 'senderId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const FundDonationHistoryScalarFieldEnum: {
    id: 'id',
    requestorFirebaseId: 'requestorFirebaseId',
    donatorName: 'donatorName',
    donatorDateTime: 'donatorDateTime',
    amount: 'amount',
    paymentProcess: 'paymentProcess'
  };

  export type FundDonationHistoryScalarFieldEnum = (typeof FundDonationHistoryScalarFieldEnum)[keyof typeof FundDonationHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type termsConditionWhereInput = {
    AND?: termsConditionWhereInput | termsConditionWhereInput[]
    OR?: termsConditionWhereInput[]
    NOT?: termsConditionWhereInput | termsConditionWhereInput[]
    id?: StringFilter<"termsCondition"> | string
    userid?: StringFilter<"termsCondition"> | string
    createdAt?: DateTimeFilter<"termsCondition"> | Date | string
    updatedAt?: DateTimeFilter<"termsCondition"> | Date | string
  }

  export type termsConditionOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type termsConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: termsConditionWhereInput | termsConditionWhereInput[]
    OR?: termsConditionWhereInput[]
    NOT?: termsConditionWhereInput | termsConditionWhereInput[]
    userid?: StringFilter<"termsCondition"> | string
    createdAt?: DateTimeFilter<"termsCondition"> | Date | string
    updatedAt?: DateTimeFilter<"termsCondition"> | Date | string
  }, "id">

  export type termsConditionOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: termsConditionCountOrderByAggregateInput
    _max?: termsConditionMaxOrderByAggregateInput
    _min?: termsConditionMinOrderByAggregateInput
  }

  export type termsConditionScalarWhereWithAggregatesInput = {
    AND?: termsConditionScalarWhereWithAggregatesInput | termsConditionScalarWhereWithAggregatesInput[]
    OR?: termsConditionScalarWhereWithAggregatesInput[]
    NOT?: termsConditionScalarWhereWithAggregatesInput | termsConditionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"termsCondition"> | string
    userid?: StringWithAggregatesFilter<"termsCondition"> | string
    createdAt?: DateTimeWithAggregatesFilter<"termsCondition"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"termsCondition"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    notification?: StringFilter<"Notification"> | string
    uuid?: StringNullableFilter<"Notification"> | string | null
    userid?: StringFilter<"Notification"> | string
    notifType?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    notification?: SortOrder
    uuid?: SortOrderInput | SortOrder
    userid?: SortOrder
    notifType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    notification?: StringFilter<"Notification"> | string
    uuid?: StringNullableFilter<"Notification"> | string | null
    userid?: StringFilter<"Notification"> | string
    notifType?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    notification?: SortOrder
    uuid?: SortOrderInput | SortOrder
    userid?: SortOrder
    notifType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    notification?: StringWithAggregatesFilter<"Notification"> | string
    uuid?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    userid?: StringWithAggregatesFilter<"Notification"> | string
    notifType?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    targetAmount?: FloatFilter<"Campaign"> | number
    currentAmount?: FloatFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorFirebaseId?: StringFilter<"Campaign"> | string
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorFirebaseId?: SortOrder
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    title?: StringFilter<"Campaign"> | string
    description?: StringFilter<"Campaign"> | string
    targetAmount?: FloatFilter<"Campaign"> | number
    currentAmount?: FloatFilter<"Campaign"> | number
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    creatorFirebaseId?: StringFilter<"Campaign"> | string
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorFirebaseId?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _avg?: CampaignAvgOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
    _sum?: CampaignSumOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    title?: StringWithAggregatesFilter<"Campaign"> | string
    description?: StringWithAggregatesFilter<"Campaign"> | string
    targetAmount?: FloatWithAggregatesFilter<"Campaign"> | number
    currentAmount?: FloatWithAggregatesFilter<"Campaign"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    creatorFirebaseId?: StringWithAggregatesFilter<"Campaign"> | string
  }

  export type DonationRequestWhereInput = {
    AND?: DonationRequestWhereInput | DonationRequestWhereInput[]
    OR?: DonationRequestWhereInput[]
    NOT?: DonationRequestWhereInput | DonationRequestWhereInput[]
    id?: StringFilter<"DonationRequest"> | string
    namaBarang?: StringNullableFilter<"DonationRequest"> | string | null
    requestorFirebaseId?: StringFilter<"DonationRequest"> | string
    requestorName?: StringFilter<"DonationRequest"> | string
    donationType?: StringNullableFilter<"DonationRequest"> | string | null
    detailBarang?: StringNullableFilter<"DonationRequest"> | string | null
    alasanDonasi?: StringNullableFilter<"DonationRequest"> | string | null
    locationDescription?: StringFilter<"DonationRequest"> | string
    latitude?: FloatNullableFilter<"DonationRequest"> | number | null
    longitude?: FloatNullableFilter<"DonationRequest"> | number | null
    city?: StringNullableFilter<"DonationRequest"> | string | null
    description?: StringFilter<"DonationRequest"> | string
    itemType?: StringFilter<"DonationRequest"> | string
    itemWeight?: FloatNullableFilter<"DonationRequest"> | number | null
    weightUnit?: StringNullableFilter<"DonationRequest"> | string | null
    status?: EnumRequestStatusFilter<"DonationRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"DonationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DonationRequest"> | Date | string
    expiredAt?: DateTimeNullableFilter<"DonationRequest"> | Date | string | null
    photoDonations?: PhotoDonationListRelationFilter
    fulfillments?: DonationFulfillmentListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    donationRequestments?: DonationRequestmentListRelationFilter
  }

  export type DonationRequestOrderByWithRelationInput = {
    id?: SortOrder
    namaBarang?: SortOrderInput | SortOrder
    requestorFirebaseId?: SortOrder
    requestorName?: SortOrder
    donationType?: SortOrderInput | SortOrder
    detailBarang?: SortOrderInput | SortOrder
    alasanDonasi?: SortOrderInput | SortOrder
    locationDescription?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    description?: SortOrder
    itemType?: SortOrder
    itemWeight?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    photoDonations?: PhotoDonationOrderByRelationAggregateInput
    fulfillments?: DonationFulfillmentOrderByRelationAggregateInput
    chatRooms?: ChatRoomOrderByRelationAggregateInput
    donationRequestments?: DonationRequestmentOrderByRelationAggregateInput
  }

  export type DonationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    detailBarang_itemType_alasanDonasi_requestorFirebaseId?: DonationRequestDetailBarangItemTypeAlasanDonasiRequestorFirebaseIdCompoundUniqueInput
    AND?: DonationRequestWhereInput | DonationRequestWhereInput[]
    OR?: DonationRequestWhereInput[]
    NOT?: DonationRequestWhereInput | DonationRequestWhereInput[]
    namaBarang?: StringNullableFilter<"DonationRequest"> | string | null
    requestorFirebaseId?: StringFilter<"DonationRequest"> | string
    requestorName?: StringFilter<"DonationRequest"> | string
    donationType?: StringNullableFilter<"DonationRequest"> | string | null
    detailBarang?: StringNullableFilter<"DonationRequest"> | string | null
    alasanDonasi?: StringNullableFilter<"DonationRequest"> | string | null
    locationDescription?: StringFilter<"DonationRequest"> | string
    latitude?: FloatNullableFilter<"DonationRequest"> | number | null
    longitude?: FloatNullableFilter<"DonationRequest"> | number | null
    city?: StringNullableFilter<"DonationRequest"> | string | null
    description?: StringFilter<"DonationRequest"> | string
    itemType?: StringFilter<"DonationRequest"> | string
    itemWeight?: FloatNullableFilter<"DonationRequest"> | number | null
    weightUnit?: StringNullableFilter<"DonationRequest"> | string | null
    status?: EnumRequestStatusFilter<"DonationRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"DonationRequest"> | Date | string
    updatedAt?: DateTimeFilter<"DonationRequest"> | Date | string
    expiredAt?: DateTimeNullableFilter<"DonationRequest"> | Date | string | null
    photoDonations?: PhotoDonationListRelationFilter
    fulfillments?: DonationFulfillmentListRelationFilter
    chatRooms?: ChatRoomListRelationFilter
    donationRequestments?: DonationRequestmentListRelationFilter
  }, "id" | "detailBarang_itemType_alasanDonasi_requestorFirebaseId">

  export type DonationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    namaBarang?: SortOrderInput | SortOrder
    requestorFirebaseId?: SortOrder
    requestorName?: SortOrder
    donationType?: SortOrderInput | SortOrder
    detailBarang?: SortOrderInput | SortOrder
    alasanDonasi?: SortOrderInput | SortOrder
    locationDescription?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    description?: SortOrder
    itemType?: SortOrder
    itemWeight?: SortOrderInput | SortOrder
    weightUnit?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    _count?: DonationRequestCountOrderByAggregateInput
    _avg?: DonationRequestAvgOrderByAggregateInput
    _max?: DonationRequestMaxOrderByAggregateInput
    _min?: DonationRequestMinOrderByAggregateInput
    _sum?: DonationRequestSumOrderByAggregateInput
  }

  export type DonationRequestScalarWhereWithAggregatesInput = {
    AND?: DonationRequestScalarWhereWithAggregatesInput | DonationRequestScalarWhereWithAggregatesInput[]
    OR?: DonationRequestScalarWhereWithAggregatesInput[]
    NOT?: DonationRequestScalarWhereWithAggregatesInput | DonationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationRequest"> | string
    namaBarang?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    requestorFirebaseId?: StringWithAggregatesFilter<"DonationRequest"> | string
    requestorName?: StringWithAggregatesFilter<"DonationRequest"> | string
    donationType?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    detailBarang?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    alasanDonasi?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    locationDescription?: StringWithAggregatesFilter<"DonationRequest"> | string
    latitude?: FloatNullableWithAggregatesFilter<"DonationRequest"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"DonationRequest"> | number | null
    city?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    description?: StringWithAggregatesFilter<"DonationRequest"> | string
    itemType?: StringWithAggregatesFilter<"DonationRequest"> | string
    itemWeight?: FloatNullableWithAggregatesFilter<"DonationRequest"> | number | null
    weightUnit?: StringNullableWithAggregatesFilter<"DonationRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"DonationRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"DonationRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationRequest"> | Date | string
    expiredAt?: DateTimeNullableWithAggregatesFilter<"DonationRequest"> | Date | string | null
  }

  export type PhotoDonationWhereInput = {
    AND?: PhotoDonationWhereInput | PhotoDonationWhereInput[]
    OR?: PhotoDonationWhereInput[]
    NOT?: PhotoDonationWhereInput | PhotoDonationWhereInput[]
    id?: StringFilter<"PhotoDonation"> | string
    imageFile?: StringFilter<"PhotoDonation"> | string
    createdAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    donationRequestId?: StringFilter<"PhotoDonation"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
  }

  export type PhotoDonationOrderByWithRelationInput = {
    id?: SortOrder
    imageFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationRequestId?: SortOrder
    donationRequest?: DonationRequestOrderByWithRelationInput
  }

  export type PhotoDonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoDonationWhereInput | PhotoDonationWhereInput[]
    OR?: PhotoDonationWhereInput[]
    NOT?: PhotoDonationWhereInput | PhotoDonationWhereInput[]
    imageFile?: StringFilter<"PhotoDonation"> | string
    createdAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    donationRequestId?: StringFilter<"PhotoDonation"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
  }, "id">

  export type PhotoDonationOrderByWithAggregationInput = {
    id?: SortOrder
    imageFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationRequestId?: SortOrder
    _count?: PhotoDonationCountOrderByAggregateInput
    _max?: PhotoDonationMaxOrderByAggregateInput
    _min?: PhotoDonationMinOrderByAggregateInput
  }

  export type PhotoDonationScalarWhereWithAggregatesInput = {
    AND?: PhotoDonationScalarWhereWithAggregatesInput | PhotoDonationScalarWhereWithAggregatesInput[]
    OR?: PhotoDonationScalarWhereWithAggregatesInput[]
    NOT?: PhotoDonationScalarWhereWithAggregatesInput | PhotoDonationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PhotoDonation"> | string
    imageFile?: StringWithAggregatesFilter<"PhotoDonation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PhotoDonation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PhotoDonation"> | Date | string
    donationRequestId?: StringWithAggregatesFilter<"PhotoDonation"> | string
  }

  export type DonationFulfillmentWhereInput = {
    AND?: DonationFulfillmentWhereInput | DonationFulfillmentWhereInput[]
    OR?: DonationFulfillmentWhereInput[]
    NOT?: DonationFulfillmentWhereInput | DonationFulfillmentWhereInput[]
    id?: StringFilter<"DonationFulfillment"> | string
    createdAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    donorFirebaseId?: StringFilter<"DonationFulfillment"> | string
    donorRequestFirebaseId?: StringNullableFilter<"DonationFulfillment"> | string | null
    donorName?: StringFilter<"DonationFulfillment"> | string
    donorNotes?: StringFilter<"DonationFulfillment"> | string
    latitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    longitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    address?: StringNullableFilter<"DonationFulfillment"> | string | null
    city?: StringNullableFilter<"DonationFulfillment"> | string | null
    status?: EnumRequestStatusFilter<"DonationFulfillment"> | $Enums.RequestStatus
    donationRequestId?: StringFilter<"DonationFulfillment"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    chatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }

  export type DonationFulfillmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorFirebaseId?: SortOrder
    donorRequestFirebaseId?: SortOrderInput | SortOrder
    donorName?: SortOrder
    donorNotes?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    status?: SortOrder
    donationRequestId?: SortOrder
    donationRequest?: DonationRequestOrderByWithRelationInput
    chatRoom?: ChatRoomOrderByWithRelationInput
  }

  export type DonationFulfillmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    donationRequestId_donorNotes_donorFirebaseId_donorName?: DonationFulfillmentDonationRequestIdDonorNotesDonorFirebaseIdDonorNameCompoundUniqueInput
    AND?: DonationFulfillmentWhereInput | DonationFulfillmentWhereInput[]
    OR?: DonationFulfillmentWhereInput[]
    NOT?: DonationFulfillmentWhereInput | DonationFulfillmentWhereInput[]
    createdAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    donorFirebaseId?: StringFilter<"DonationFulfillment"> | string
    donorRequestFirebaseId?: StringNullableFilter<"DonationFulfillment"> | string | null
    donorName?: StringFilter<"DonationFulfillment"> | string
    donorNotes?: StringFilter<"DonationFulfillment"> | string
    latitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    longitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    address?: StringNullableFilter<"DonationFulfillment"> | string | null
    city?: StringNullableFilter<"DonationFulfillment"> | string | null
    status?: EnumRequestStatusFilter<"DonationFulfillment"> | $Enums.RequestStatus
    donationRequestId?: StringFilter<"DonationFulfillment"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    chatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }, "id" | "donationRequestId_donorNotes_donorFirebaseId_donorName">

  export type DonationFulfillmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorFirebaseId?: SortOrder
    donorRequestFirebaseId?: SortOrderInput | SortOrder
    donorName?: SortOrder
    donorNotes?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    status?: SortOrder
    donationRequestId?: SortOrder
    _count?: DonationFulfillmentCountOrderByAggregateInput
    _avg?: DonationFulfillmentAvgOrderByAggregateInput
    _max?: DonationFulfillmentMaxOrderByAggregateInput
    _min?: DonationFulfillmentMinOrderByAggregateInput
    _sum?: DonationFulfillmentSumOrderByAggregateInput
  }

  export type DonationFulfillmentScalarWhereWithAggregatesInput = {
    AND?: DonationFulfillmentScalarWhereWithAggregatesInput | DonationFulfillmentScalarWhereWithAggregatesInput[]
    OR?: DonationFulfillmentScalarWhereWithAggregatesInput[]
    NOT?: DonationFulfillmentScalarWhereWithAggregatesInput | DonationFulfillmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationFulfillment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DonationFulfillment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationFulfillment"> | Date | string
    donorFirebaseId?: StringWithAggregatesFilter<"DonationFulfillment"> | string
    donorRequestFirebaseId?: StringNullableWithAggregatesFilter<"DonationFulfillment"> | string | null
    donorName?: StringWithAggregatesFilter<"DonationFulfillment"> | string
    donorNotes?: StringWithAggregatesFilter<"DonationFulfillment"> | string
    latitude?: FloatNullableWithAggregatesFilter<"DonationFulfillment"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"DonationFulfillment"> | number | null
    address?: StringNullableWithAggregatesFilter<"DonationFulfillment"> | string | null
    city?: StringNullableWithAggregatesFilter<"DonationFulfillment"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"DonationFulfillment"> | $Enums.RequestStatus
    donationRequestId?: StringWithAggregatesFilter<"DonationFulfillment"> | string
  }

  export type DonationRequestmentWhereInput = {
    AND?: DonationRequestmentWhereInput | DonationRequestmentWhereInput[]
    OR?: DonationRequestmentWhereInput[]
    NOT?: DonationRequestmentWhereInput | DonationRequestmentWhereInput[]
    id?: StringFilter<"DonationRequestment"> | string
    createdAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    requestorId?: StringFilter<"DonationRequestment"> | string
    donorFirebaseId?: StringNullableFilter<"DonationRequestment"> | string | null
    status?: EnumRequestStatusFilter<"DonationRequestment"> | $Enums.RequestStatus
    donorName?: StringFilter<"DonationRequestment"> | string
    reason?: StringFilter<"DonationRequestment"> | string
    latitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    longitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    address?: StringNullableFilter<"DonationRequestment"> | string | null
    city?: StringNullableFilter<"DonationRequestment"> | string | null
    donationRequestId?: StringFilter<"DonationRequestment"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    chatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }

  export type DonationRequestmentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestorId?: SortOrder
    donorFirebaseId?: SortOrderInput | SortOrder
    status?: SortOrder
    donorName?: SortOrder
    reason?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    donationRequestId?: SortOrder
    donationRequest?: DonationRequestOrderByWithRelationInput
    chatRoom?: ChatRoomOrderByWithRelationInput
  }

  export type DonationRequestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    donationRequestId_requestorId_reason_donorName?: DonationRequestmentDonationRequestIdRequestorIdReasonDonorNameCompoundUniqueInput
    AND?: DonationRequestmentWhereInput | DonationRequestmentWhereInput[]
    OR?: DonationRequestmentWhereInput[]
    NOT?: DonationRequestmentWhereInput | DonationRequestmentWhereInput[]
    createdAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    requestorId?: StringFilter<"DonationRequestment"> | string
    donorFirebaseId?: StringNullableFilter<"DonationRequestment"> | string | null
    status?: EnumRequestStatusFilter<"DonationRequestment"> | $Enums.RequestStatus
    donorName?: StringFilter<"DonationRequestment"> | string
    reason?: StringFilter<"DonationRequestment"> | string
    latitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    longitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    address?: StringNullableFilter<"DonationRequestment"> | string | null
    city?: StringNullableFilter<"DonationRequestment"> | string | null
    donationRequestId?: StringFilter<"DonationRequestment"> | string
    donationRequest?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    chatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }, "id" | "donationRequestId_requestorId_reason_donorName">

  export type DonationRequestmentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestorId?: SortOrder
    donorFirebaseId?: SortOrderInput | SortOrder
    status?: SortOrder
    donorName?: SortOrder
    reason?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    donationRequestId?: SortOrder
    _count?: DonationRequestmentCountOrderByAggregateInput
    _avg?: DonationRequestmentAvgOrderByAggregateInput
    _max?: DonationRequestmentMaxOrderByAggregateInput
    _min?: DonationRequestmentMinOrderByAggregateInput
    _sum?: DonationRequestmentSumOrderByAggregateInput
  }

  export type DonationRequestmentScalarWhereWithAggregatesInput = {
    AND?: DonationRequestmentScalarWhereWithAggregatesInput | DonationRequestmentScalarWhereWithAggregatesInput[]
    OR?: DonationRequestmentScalarWhereWithAggregatesInput[]
    NOT?: DonationRequestmentScalarWhereWithAggregatesInput | DonationRequestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationRequestment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DonationRequestment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DonationRequestment"> | Date | string
    requestorId?: StringWithAggregatesFilter<"DonationRequestment"> | string
    donorFirebaseId?: StringNullableWithAggregatesFilter<"DonationRequestment"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"DonationRequestment"> | $Enums.RequestStatus
    donorName?: StringWithAggregatesFilter<"DonationRequestment"> | string
    reason?: StringWithAggregatesFilter<"DonationRequestment"> | string
    latitude?: FloatNullableWithAggregatesFilter<"DonationRequestment"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"DonationRequestment"> | number | null
    address?: StringNullableWithAggregatesFilter<"DonationRequestment"> | string | null
    city?: StringNullableWithAggregatesFilter<"DonationRequestment"> | string | null
    donationRequestId?: StringWithAggregatesFilter<"DonationRequestment"> | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    email?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    email?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    email?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isDonate?: BoolFilter<"User"> | boolean
    isPhotoId?: BoolFilter<"User"> | boolean
    tokenFcm?: StringNullableFilter<"User"> | string | null
    identificationNumber?: StringNullableFilter<"User"> | string | null
    photoKtp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: ChatListRelationFilter
    readMessages?: ChatListRelationFilter
    rooms?: ChatRoomMemberListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDonate?: SortOrder
    isPhotoId?: SortOrder
    tokenFcm?: SortOrderInput | SortOrder
    identificationNumber?: SortOrderInput | SortOrder
    photoKtp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentMessages?: ChatOrderByRelationAggregateInput
    readMessages?: ChatOrderByRelationAggregateInput
    rooms?: ChatRoomMemberOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isDonate?: BoolFilter<"User"> | boolean
    isPhotoId?: BoolFilter<"User"> | boolean
    tokenFcm?: StringNullableFilter<"User"> | string | null
    identificationNumber?: StringNullableFilter<"User"> | string | null
    photoKtp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: ChatListRelationFilter
    readMessages?: ChatListRelationFilter
    rooms?: ChatRoomMemberListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    isActive?: SortOrder
    isDonate?: SortOrder
    isPhotoId?: SortOrder
    tokenFcm?: SortOrderInput | SortOrder
    identificationNumber?: SortOrderInput | SortOrder
    photoKtp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isDonate?: BoolWithAggregatesFilter<"User"> | boolean
    isPhotoId?: BoolWithAggregatesFilter<"User"> | boolean
    tokenFcm?: StringNullableWithAggregatesFilter<"User"> | string | null
    identificationNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    photoKtp?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    roomId?: StringFilter<"ChatRoom"> | string
    donationRequestId?: StringFilter<"ChatRoom"> | string
    fulfillmentId?: StringNullableFilter<"ChatRoom"> | string | null
    requestmentId?: StringNullableFilter<"ChatRoom"> | string | null
    isActive?: BoolFilter<"ChatRoom"> | boolean
    lastMessage?: StringFilter<"ChatRoom"> | string
    lastSeen?: DateTimeFilter<"ChatRoom"> | Date | string
    unreadCount?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    donation?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    fulfillment?: XOR<DonationFulfillmentNullableScalarRelationFilter, DonationFulfillmentWhereInput> | null
    requestment?: XOR<DonationRequestmentNullableScalarRelationFilter, DonationRequestmentWhereInput> | null
    members?: ChatRoomMemberListRelationFilter
    chats?: ChatListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    donationRequestId?: SortOrder
    fulfillmentId?: SortOrderInput | SortOrder
    requestmentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastMessage?: SortOrder
    lastSeen?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donation?: DonationRequestOrderByWithRelationInput
    fulfillment?: DonationFulfillmentOrderByWithRelationInput
    requestment?: DonationRequestmentOrderByWithRelationInput
    members?: ChatRoomMemberOrderByRelationAggregateInput
    chats?: ChatOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomId?: string
    fulfillmentId?: string
    requestmentId?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    donationRequestId?: StringFilter<"ChatRoom"> | string
    isActive?: BoolFilter<"ChatRoom"> | boolean
    lastMessage?: StringFilter<"ChatRoom"> | string
    lastSeen?: DateTimeFilter<"ChatRoom"> | Date | string
    unreadCount?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    donation?: XOR<DonationRequestScalarRelationFilter, DonationRequestWhereInput>
    fulfillment?: XOR<DonationFulfillmentNullableScalarRelationFilter, DonationFulfillmentWhereInput> | null
    requestment?: XOR<DonationRequestmentNullableScalarRelationFilter, DonationRequestmentWhereInput> | null
    members?: ChatRoomMemberListRelationFilter
    chats?: ChatListRelationFilter
  }, "id" | "roomId" | "fulfillmentId" | "requestmentId">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    donationRequestId?: SortOrder
    fulfillmentId?: SortOrderInput | SortOrder
    requestmentId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastMessage?: SortOrder
    lastSeen?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _avg?: ChatRoomAvgOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
    _sum?: ChatRoomSumOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatRoom"> | string
    roomId?: StringWithAggregatesFilter<"ChatRoom"> | string
    donationRequestId?: StringWithAggregatesFilter<"ChatRoom"> | string
    fulfillmentId?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    requestmentId?: StringNullableWithAggregatesFilter<"ChatRoom"> | string | null
    isActive?: BoolWithAggregatesFilter<"ChatRoom"> | boolean
    lastMessage?: StringWithAggregatesFilter<"ChatRoom"> | string
    lastSeen?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    unreadCount?: IntWithAggregatesFilter<"ChatRoom"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
  }

  export type ChatRoomMemberWhereInput = {
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    userId?: StringFilter<"ChatRoomMember"> | string
    roomId?: StringFilter<"ChatRoomMember"> | string
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }

  export type ChatRoomMemberOrderByWithRelationInput = {
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    room?: ChatRoomOrderByWithRelationInput
  }

  export type ChatRoomMemberWhereUniqueInput = Prisma.AtLeast<{
    userId_roomId?: ChatRoomMemberUserIdRoomIdCompoundUniqueInput
    AND?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    OR?: ChatRoomMemberWhereInput[]
    NOT?: ChatRoomMemberWhereInput | ChatRoomMemberWhereInput[]
    userId?: StringFilter<"ChatRoomMember"> | string
    roomId?: StringFilter<"ChatRoomMember"> | string
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
  }, "userId_roomId">

  export type ChatRoomMemberOrderByWithAggregationInput = {
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
    _count?: ChatRoomMemberCountOrderByAggregateInput
    _max?: ChatRoomMemberMaxOrderByAggregateInput
    _min?: ChatRoomMemberMinOrderByAggregateInput
  }

  export type ChatRoomMemberScalarWhereWithAggregatesInput = {
    AND?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    OR?: ChatRoomMemberScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomMemberScalarWhereWithAggregatesInput | ChatRoomMemberScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ChatRoomMember"> | string
    roomId?: StringWithAggregatesFilter<"ChatRoomMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"ChatRoomMember"> | Date | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    roomId?: StringFilter<"Chat"> | string
    senderId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    readBy?: UserListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: ChatRoomOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    readBy?: UserOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    roomId?: StringFilter<"Chat"> | string
    senderId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    room?: XOR<ChatRoomScalarRelationFilter, ChatRoomWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    readBy?: UserListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    roomId?: StringWithAggregatesFilter<"Chat"> | string
    senderId?: StringWithAggregatesFilter<"Chat"> | string
    message?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type FundDonationHistoryWhereInput = {
    AND?: FundDonationHistoryWhereInput | FundDonationHistoryWhereInput[]
    OR?: FundDonationHistoryWhereInput[]
    NOT?: FundDonationHistoryWhereInput | FundDonationHistoryWhereInput[]
    id?: StringFilter<"FundDonationHistory"> | string
    requestorFirebaseId?: StringFilter<"FundDonationHistory"> | string
    donatorName?: StringFilter<"FundDonationHistory"> | string
    donatorDateTime?: DateTimeFilter<"FundDonationHistory"> | Date | string
    amount?: DecimalFilter<"FundDonationHistory"> | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFilter<"FundDonationHistory"> | string
  }

  export type FundDonationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    requestorFirebaseId?: SortOrder
    donatorName?: SortOrder
    donatorDateTime?: SortOrder
    amount?: SortOrder
    paymentProcess?: SortOrder
  }

  export type FundDonationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundDonationHistoryWhereInput | FundDonationHistoryWhereInput[]
    OR?: FundDonationHistoryWhereInput[]
    NOT?: FundDonationHistoryWhereInput | FundDonationHistoryWhereInput[]
    requestorFirebaseId?: StringFilter<"FundDonationHistory"> | string
    donatorName?: StringFilter<"FundDonationHistory"> | string
    donatorDateTime?: DateTimeFilter<"FundDonationHistory"> | Date | string
    amount?: DecimalFilter<"FundDonationHistory"> | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFilter<"FundDonationHistory"> | string
  }, "id">

  export type FundDonationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    requestorFirebaseId?: SortOrder
    donatorName?: SortOrder
    donatorDateTime?: SortOrder
    amount?: SortOrder
    paymentProcess?: SortOrder
    _count?: FundDonationHistoryCountOrderByAggregateInput
    _avg?: FundDonationHistoryAvgOrderByAggregateInput
    _max?: FundDonationHistoryMaxOrderByAggregateInput
    _min?: FundDonationHistoryMinOrderByAggregateInput
    _sum?: FundDonationHistorySumOrderByAggregateInput
  }

  export type FundDonationHistoryScalarWhereWithAggregatesInput = {
    AND?: FundDonationHistoryScalarWhereWithAggregatesInput | FundDonationHistoryScalarWhereWithAggregatesInput[]
    OR?: FundDonationHistoryScalarWhereWithAggregatesInput[]
    NOT?: FundDonationHistoryScalarWhereWithAggregatesInput | FundDonationHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FundDonationHistory"> | string
    requestorFirebaseId?: StringWithAggregatesFilter<"FundDonationHistory"> | string
    donatorName?: StringWithAggregatesFilter<"FundDonationHistory"> | string
    donatorDateTime?: DateTimeWithAggregatesFilter<"FundDonationHistory"> | Date | string
    amount?: DecimalWithAggregatesFilter<"FundDonationHistory"> | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringWithAggregatesFilter<"FundDonationHistory"> | string
  }

  export type termsConditionCreateInput = {
    id?: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type termsConditionUncheckedCreateInput = {
    id?: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type termsConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type termsConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type termsConditionCreateManyInput = {
    id?: string
    userid: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type termsConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type termsConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    notification: string
    uuid?: string | null
    userid: string
    notifType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    notification: string
    uuid?: string | null
    userid: string
    notifType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: StringFieldUpdateOperationsInput | string
    notifType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: StringFieldUpdateOperationsInput | string
    notifType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    notification: string
    uuid?: string | null
    userid: string
    notifType: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: StringFieldUpdateOperationsInput | string
    notifType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    notification?: StringFieldUpdateOperationsInput | string
    uuid?: NullableStringFieldUpdateOperationsInput | string | null
    userid?: StringFieldUpdateOperationsInput | string
    notifType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    title: string
    description: string
    targetAmount: number
    currentAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorFirebaseId: string
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    targetAmount: number
    currentAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorFirebaseId: string
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorFirebaseId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorFirebaseId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignCreateManyInput = {
    id?: string
    title: string
    description: string
    targetAmount: number
    currentAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorFirebaseId: string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorFirebaseId?: StringFieldUpdateOperationsInput | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    targetAmount?: FloatFieldUpdateOperationsInput | number
    currentAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorFirebaseId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationRequestCreateInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestUncheckedCreateInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationUncheckedCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentUncheckedCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentUncheckedCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUncheckedUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUncheckedUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestCreateManyInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
  }

  export type DonationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DonationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PhotoDonationCreateInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donationRequest: DonationRequestCreateNestedOneWithoutPhotoDonationsInput
  }

  export type PhotoDonationUncheckedCreateInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donationRequestId: string
  }

  export type PhotoDonationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationRequest?: DonationRequestUpdateOneRequiredWithoutPhotoDonationsNestedInput
  }

  export type PhotoDonationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoDonationCreateManyInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donationRequestId: string
  }

  export type PhotoDonationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDonationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationFulfillmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    donationRequest: DonationRequestCreateNestedOneWithoutFulfillmentsInput
    chatRoom?: ChatRoomCreateNestedOneWithoutFulfillmentInput
  }

  export type DonationFulfillmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    donationRequestId: string
    chatRoom?: ChatRoomUncheckedCreateNestedOneWithoutFulfillmentInput
  }

  export type DonationFulfillmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donationRequest?: DonationRequestUpdateOneRequiredWithoutFulfillmentsNestedInput
    chatRoom?: ChatRoomUpdateOneWithoutFulfillmentNestedInput
  }

  export type DonationFulfillmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donationRequestId?: StringFieldUpdateOperationsInput | string
    chatRoom?: ChatRoomUncheckedUpdateOneWithoutFulfillmentNestedInput
  }

  export type DonationFulfillmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    donationRequestId: string
  }

  export type DonationFulfillmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type DonationFulfillmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationRequestmentCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    donationRequest: DonationRequestCreateNestedOneWithoutDonationRequestmentsInput
    chatRoom?: ChatRoomCreateNestedOneWithoutRequestmentInput
  }

  export type DonationRequestmentUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    donationRequestId: string
    chatRoom?: ChatRoomUncheckedCreateNestedOneWithoutRequestmentInput
  }

  export type DonationRequestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    donationRequest?: DonationRequestUpdateOneRequiredWithoutDonationRequestmentsNestedInput
    chatRoom?: ChatRoomUpdateOneWithoutRequestmentNestedInput
  }

  export type DonationRequestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    donationRequestId?: StringFieldUpdateOperationsInput | string
    chatRoom?: ChatRoomUncheckedUpdateOneWithoutRequestmentNestedInput
  }

  export type DonationRequestmentCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    donationRequestId: string
  }

  export type DonationRequestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationRequestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type TokenCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateManyInput = {
    id?: string
    email: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    readMessages?: ChatCreateNestedManyWithoutReadByInput
    rooms?: ChatRoomMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    readMessages?: ChatUncheckedCreateNestedManyWithoutReadByInput
    rooms?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    readMessages?: ChatUpdateManyWithoutReadByNestedInput
    rooms?: ChatRoomMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    readMessages?: ChatUncheckedUpdateManyWithoutReadByNestedInput
    rooms?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomCreateInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donation: DonationRequestCreateNestedOneWithoutChatRoomsInput
    fulfillment?: DonationFulfillmentCreateNestedOneWithoutChatRoomInput
    requestment?: DonationRequestmentCreateNestedOneWithoutChatRoomInput
    members?: ChatRoomMemberCreateNestedManyWithoutRoomInput
    chats?: ChatCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    roomId: string
    donationRequestId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput
    chats?: ChatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput
    fulfillment?: DonationFulfillmentUpdateOneWithoutChatRoomNestedInput
    requestment?: DonationRequestmentUpdateOneWithoutChatRoomNestedInput
    members?: ChatRoomMemberUpdateManyWithoutRoomNestedInput
    chats?: ChatUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    chats?: ChatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    roomId: string
    donationRequestId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberCreateInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutRoomsInput
    room: ChatRoomCreateNestedOneWithoutMembersInput
  }

  export type ChatRoomMemberUncheckedCreateInput = {
    userId: string
    roomId: string
    joinedAt?: Date | string
  }

  export type ChatRoomMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
    room?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberCreateManyInput = {
    userId: string
    roomId: string
    joinedAt?: Date | string
  }

  export type ChatRoomMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutChatsInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
    readBy?: UserCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    roomId: string
    senderId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readBy?: UserUncheckedCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutChatsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    readBy?: UserUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readBy?: UserUncheckedUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    roomId: string
    senderId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundDonationHistoryCreateInput = {
    id?: string
    requestorFirebaseId: string
    donatorName: string
    donatorDateTime?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    paymentProcess: string
  }

  export type FundDonationHistoryUncheckedCreateInput = {
    id?: string
    requestorFirebaseId: string
    donatorName: string
    donatorDateTime?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    paymentProcess: string
  }

  export type FundDonationHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    donatorName?: StringFieldUpdateOperationsInput | string
    donatorDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFieldUpdateOperationsInput | string
  }

  export type FundDonationHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    donatorName?: StringFieldUpdateOperationsInput | string
    donatorDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFieldUpdateOperationsInput | string
  }

  export type FundDonationHistoryCreateManyInput = {
    id?: string
    requestorFirebaseId: string
    donatorName: string
    donatorDateTime?: Date | string
    amount: Decimal | DecimalJsLike | number | string
    paymentProcess: string
  }

  export type FundDonationHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    donatorName?: StringFieldUpdateOperationsInput | string
    donatorDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFieldUpdateOperationsInput | string
  }

  export type FundDonationHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    donatorName?: StringFieldUpdateOperationsInput | string
    donatorDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentProcess?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type termsConditionCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type termsConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type termsConditionMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    notification?: SortOrder
    uuid?: SortOrder
    userid?: SortOrder
    notifType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    notification?: SortOrder
    uuid?: SortOrder
    userid?: SortOrder
    notifType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    notification?: SortOrder
    uuid?: SortOrder
    userid?: SortOrder
    notifType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorFirebaseId?: SortOrder
  }

  export type CampaignAvgOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorFirebaseId?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    targetAmount?: SortOrder
    currentAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorFirebaseId?: SortOrder
  }

  export type CampaignSumOrderByAggregateInput = {
    targetAmount?: SortOrder
    currentAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PhotoDonationListRelationFilter = {
    every?: PhotoDonationWhereInput
    some?: PhotoDonationWhereInput
    none?: PhotoDonationWhereInput
  }

  export type DonationFulfillmentListRelationFilter = {
    every?: DonationFulfillmentWhereInput
    some?: DonationFulfillmentWhereInput
    none?: DonationFulfillmentWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type DonationRequestmentListRelationFilter = {
    every?: DonationRequestmentWhereInput
    some?: DonationRequestmentWhereInput
    none?: DonationRequestmentWhereInput
  }

  export type PhotoDonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationFulfillmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationRequestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationRequestDetailBarangItemTypeAlasanDonasiRequestorFirebaseIdCompoundUniqueInput = {
    detailBarang: string
    itemType: string
    alasanDonasi: string
    requestorFirebaseId: string
  }

  export type DonationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    requestorFirebaseId?: SortOrder
    requestorName?: SortOrder
    donationType?: SortOrder
    detailBarang?: SortOrder
    alasanDonasi?: SortOrder
    locationDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    description?: SortOrder
    itemType?: SortOrder
    itemWeight?: SortOrder
    weightUnit?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type DonationRequestAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    itemWeight?: SortOrder
  }

  export type DonationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    requestorFirebaseId?: SortOrder
    requestorName?: SortOrder
    donationType?: SortOrder
    detailBarang?: SortOrder
    alasanDonasi?: SortOrder
    locationDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    description?: SortOrder
    itemType?: SortOrder
    itemWeight?: SortOrder
    weightUnit?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type DonationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    namaBarang?: SortOrder
    requestorFirebaseId?: SortOrder
    requestorName?: SortOrder
    donationType?: SortOrder
    detailBarang?: SortOrder
    alasanDonasi?: SortOrder
    locationDescription?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    description?: SortOrder
    itemType?: SortOrder
    itemWeight?: SortOrder
    weightUnit?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type DonationRequestSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    itemWeight?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DonationRequestScalarRelationFilter = {
    is?: DonationRequestWhereInput
    isNot?: DonationRequestWhereInput
  }

  export type PhotoDonationCountOrderByAggregateInput = {
    id?: SortOrder
    imageFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationRequestId?: SortOrder
  }

  export type PhotoDonationMaxOrderByAggregateInput = {
    id?: SortOrder
    imageFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationRequestId?: SortOrder
  }

  export type PhotoDonationMinOrderByAggregateInput = {
    id?: SortOrder
    imageFile?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donationRequestId?: SortOrder
  }

  export type ChatRoomNullableScalarRelationFilter = {
    is?: ChatRoomWhereInput | null
    isNot?: ChatRoomWhereInput | null
  }

  export type DonationFulfillmentDonationRequestIdDonorNotesDonorFirebaseIdDonorNameCompoundUniqueInput = {
    donationRequestId: string
    donorNotes: string
    donorFirebaseId: string
    donorName: string
  }

  export type DonationFulfillmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorFirebaseId?: SortOrder
    donorRequestFirebaseId?: SortOrder
    donorName?: SortOrder
    donorNotes?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    status?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationFulfillmentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DonationFulfillmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorFirebaseId?: SortOrder
    donorRequestFirebaseId?: SortOrder
    donorName?: SortOrder
    donorNotes?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    status?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationFulfillmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    donorFirebaseId?: SortOrder
    donorRequestFirebaseId?: SortOrder
    donorName?: SortOrder
    donorNotes?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    status?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationFulfillmentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DonationRequestmentDonationRequestIdRequestorIdReasonDonorNameCompoundUniqueInput = {
    donationRequestId: string
    requestorId: string
    reason: string
    donorName: string
  }

  export type DonationRequestmentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestorId?: SortOrder
    donorFirebaseId?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    reason?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationRequestmentAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DonationRequestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestorId?: SortOrder
    donorFirebaseId?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    reason?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationRequestmentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    requestorId?: SortOrder
    donorFirebaseId?: SortOrder
    status?: SortOrder
    donorName?: SortOrder
    reason?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    address?: SortOrder
    city?: SortOrder
    donationRequestId?: SortOrder
  }

  export type DonationRequestmentSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type ChatRoomMemberListRelationFilter = {
    every?: ChatRoomMemberWhereInput
    some?: ChatRoomMemberWhereInput
    none?: ChatRoomMemberWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDonate?: SortOrder
    isPhotoId?: SortOrder
    tokenFcm?: SortOrder
    identificationNumber?: SortOrder
    photoKtp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDonate?: SortOrder
    isPhotoId?: SortOrder
    tokenFcm?: SortOrder
    identificationNumber?: SortOrder
    photoKtp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    isDonate?: SortOrder
    isPhotoId?: SortOrder
    tokenFcm?: SortOrder
    identificationNumber?: SortOrder
    photoKtp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DonationFulfillmentNullableScalarRelationFilter = {
    is?: DonationFulfillmentWhereInput | null
    isNot?: DonationFulfillmentWhereInput | null
  }

  export type DonationRequestmentNullableScalarRelationFilter = {
    is?: DonationRequestmentWhereInput | null
    isNot?: DonationRequestmentWhereInput | null
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    donationRequestId?: SortOrder
    fulfillmentId?: SortOrder
    requestmentId?: SortOrder
    isActive?: SortOrder
    lastMessage?: SortOrder
    lastSeen?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomAvgOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    donationRequestId?: SortOrder
    fulfillmentId?: SortOrder
    requestmentId?: SortOrder
    isActive?: SortOrder
    lastMessage?: SortOrder
    lastSeen?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    donationRequestId?: SortOrder
    fulfillmentId?: SortOrder
    requestmentId?: SortOrder
    isActive?: SortOrder
    lastMessage?: SortOrder
    lastSeen?: SortOrder
    unreadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatRoomSumOrderByAggregateInput = {
    unreadCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChatRoomScalarRelationFilter = {
    is?: ChatRoomWhereInput
    isNot?: ChatRoomWhereInput
  }

  export type ChatRoomMemberUserIdRoomIdCompoundUniqueInput = {
    userId: string
    roomId: string
  }

  export type ChatRoomMemberCountOrderByAggregateInput = {
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatRoomMemberMaxOrderByAggregateInput = {
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
  }

  export type ChatRoomMemberMinOrderByAggregateInput = {
    userId?: SortOrder
    roomId?: SortOrder
    joinedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    senderId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FundDonationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    requestorFirebaseId?: SortOrder
    donatorName?: SortOrder
    donatorDateTime?: SortOrder
    amount?: SortOrder
    paymentProcess?: SortOrder
  }

  export type FundDonationHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FundDonationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    requestorFirebaseId?: SortOrder
    donatorName?: SortOrder
    donatorDateTime?: SortOrder
    amount?: SortOrder
    paymentProcess?: SortOrder
  }

  export type FundDonationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    requestorFirebaseId?: SortOrder
    donatorName?: SortOrder
    donatorDateTime?: SortOrder
    amount?: SortOrder
    paymentProcess?: SortOrder
  }

  export type FundDonationHistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PhotoDonationCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput> | PhotoDonationCreateWithoutDonationRequestInput[] | PhotoDonationUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: PhotoDonationCreateOrConnectWithoutDonationRequestInput | PhotoDonationCreateOrConnectWithoutDonationRequestInput[]
    createMany?: PhotoDonationCreateManyDonationRequestInputEnvelope
    connect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
  }

  export type DonationFulfillmentCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput> | DonationFulfillmentCreateWithoutDonationRequestInput[] | DonationFulfillmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutDonationRequestInput | DonationFulfillmentCreateOrConnectWithoutDonationRequestInput[]
    createMany?: DonationFulfillmentCreateManyDonationRequestInputEnvelope
    connect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutDonationInput = {
    create?: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput> | ChatRoomCreateWithoutDonationInput[] | ChatRoomUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutDonationInput | ChatRoomCreateOrConnectWithoutDonationInput[]
    createMany?: ChatRoomCreateManyDonationInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type DonationRequestmentCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput> | DonationRequestmentCreateWithoutDonationRequestInput[] | DonationRequestmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutDonationRequestInput | DonationRequestmentCreateOrConnectWithoutDonationRequestInput[]
    createMany?: DonationRequestmentCreateManyDonationRequestInputEnvelope
    connect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
  }

  export type PhotoDonationUncheckedCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput> | PhotoDonationCreateWithoutDonationRequestInput[] | PhotoDonationUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: PhotoDonationCreateOrConnectWithoutDonationRequestInput | PhotoDonationCreateOrConnectWithoutDonationRequestInput[]
    createMany?: PhotoDonationCreateManyDonationRequestInputEnvelope
    connect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
  }

  export type DonationFulfillmentUncheckedCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput> | DonationFulfillmentCreateWithoutDonationRequestInput[] | DonationFulfillmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutDonationRequestInput | DonationFulfillmentCreateOrConnectWithoutDonationRequestInput[]
    createMany?: DonationFulfillmentCreateManyDonationRequestInputEnvelope
    connect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutDonationInput = {
    create?: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput> | ChatRoomCreateWithoutDonationInput[] | ChatRoomUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutDonationInput | ChatRoomCreateOrConnectWithoutDonationInput[]
    createMany?: ChatRoomCreateManyDonationInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type DonationRequestmentUncheckedCreateNestedManyWithoutDonationRequestInput = {
    create?: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput> | DonationRequestmentCreateWithoutDonationRequestInput[] | DonationRequestmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutDonationRequestInput | DonationRequestmentCreateOrConnectWithoutDonationRequestInput[]
    createMany?: DonationRequestmentCreateManyDonationRequestInputEnvelope
    connect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PhotoDonationUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput> | PhotoDonationCreateWithoutDonationRequestInput[] | PhotoDonationUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: PhotoDonationCreateOrConnectWithoutDonationRequestInput | PhotoDonationCreateOrConnectWithoutDonationRequestInput[]
    upsert?: PhotoDonationUpsertWithWhereUniqueWithoutDonationRequestInput | PhotoDonationUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: PhotoDonationCreateManyDonationRequestInputEnvelope
    set?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    disconnect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    delete?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    connect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    update?: PhotoDonationUpdateWithWhereUniqueWithoutDonationRequestInput | PhotoDonationUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: PhotoDonationUpdateManyWithWhereWithoutDonationRequestInput | PhotoDonationUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: PhotoDonationScalarWhereInput | PhotoDonationScalarWhereInput[]
  }

  export type DonationFulfillmentUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput> | DonationFulfillmentCreateWithoutDonationRequestInput[] | DonationFulfillmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutDonationRequestInput | DonationFulfillmentCreateOrConnectWithoutDonationRequestInput[]
    upsert?: DonationFulfillmentUpsertWithWhereUniqueWithoutDonationRequestInput | DonationFulfillmentUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: DonationFulfillmentCreateManyDonationRequestInputEnvelope
    set?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    disconnect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    delete?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    connect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    update?: DonationFulfillmentUpdateWithWhereUniqueWithoutDonationRequestInput | DonationFulfillmentUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: DonationFulfillmentUpdateManyWithWhereWithoutDonationRequestInput | DonationFulfillmentUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: DonationFulfillmentScalarWhereInput | DonationFulfillmentScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutDonationNestedInput = {
    create?: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput> | ChatRoomCreateWithoutDonationInput[] | ChatRoomUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutDonationInput | ChatRoomCreateOrConnectWithoutDonationInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutDonationInput | ChatRoomUpsertWithWhereUniqueWithoutDonationInput[]
    createMany?: ChatRoomCreateManyDonationInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutDonationInput | ChatRoomUpdateWithWhereUniqueWithoutDonationInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutDonationInput | ChatRoomUpdateManyWithWhereWithoutDonationInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type DonationRequestmentUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput> | DonationRequestmentCreateWithoutDonationRequestInput[] | DonationRequestmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutDonationRequestInput | DonationRequestmentCreateOrConnectWithoutDonationRequestInput[]
    upsert?: DonationRequestmentUpsertWithWhereUniqueWithoutDonationRequestInput | DonationRequestmentUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: DonationRequestmentCreateManyDonationRequestInputEnvelope
    set?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    disconnect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    delete?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    connect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    update?: DonationRequestmentUpdateWithWhereUniqueWithoutDonationRequestInput | DonationRequestmentUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: DonationRequestmentUpdateManyWithWhereWithoutDonationRequestInput | DonationRequestmentUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: DonationRequestmentScalarWhereInput | DonationRequestmentScalarWhereInput[]
  }

  export type PhotoDonationUncheckedUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput> | PhotoDonationCreateWithoutDonationRequestInput[] | PhotoDonationUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: PhotoDonationCreateOrConnectWithoutDonationRequestInput | PhotoDonationCreateOrConnectWithoutDonationRequestInput[]
    upsert?: PhotoDonationUpsertWithWhereUniqueWithoutDonationRequestInput | PhotoDonationUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: PhotoDonationCreateManyDonationRequestInputEnvelope
    set?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    disconnect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    delete?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    connect?: PhotoDonationWhereUniqueInput | PhotoDonationWhereUniqueInput[]
    update?: PhotoDonationUpdateWithWhereUniqueWithoutDonationRequestInput | PhotoDonationUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: PhotoDonationUpdateManyWithWhereWithoutDonationRequestInput | PhotoDonationUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: PhotoDonationScalarWhereInput | PhotoDonationScalarWhereInput[]
  }

  export type DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput> | DonationFulfillmentCreateWithoutDonationRequestInput[] | DonationFulfillmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutDonationRequestInput | DonationFulfillmentCreateOrConnectWithoutDonationRequestInput[]
    upsert?: DonationFulfillmentUpsertWithWhereUniqueWithoutDonationRequestInput | DonationFulfillmentUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: DonationFulfillmentCreateManyDonationRequestInputEnvelope
    set?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    disconnect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    delete?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    connect?: DonationFulfillmentWhereUniqueInput | DonationFulfillmentWhereUniqueInput[]
    update?: DonationFulfillmentUpdateWithWhereUniqueWithoutDonationRequestInput | DonationFulfillmentUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: DonationFulfillmentUpdateManyWithWhereWithoutDonationRequestInput | DonationFulfillmentUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: DonationFulfillmentScalarWhereInput | DonationFulfillmentScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutDonationNestedInput = {
    create?: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput> | ChatRoomCreateWithoutDonationInput[] | ChatRoomUncheckedCreateWithoutDonationInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutDonationInput | ChatRoomCreateOrConnectWithoutDonationInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutDonationInput | ChatRoomUpsertWithWhereUniqueWithoutDonationInput[]
    createMany?: ChatRoomCreateManyDonationInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutDonationInput | ChatRoomUpdateWithWhereUniqueWithoutDonationInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutDonationInput | ChatRoomUpdateManyWithWhereWithoutDonationInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type DonationRequestmentUncheckedUpdateManyWithoutDonationRequestNestedInput = {
    create?: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput> | DonationRequestmentCreateWithoutDonationRequestInput[] | DonationRequestmentUncheckedCreateWithoutDonationRequestInput[]
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutDonationRequestInput | DonationRequestmentCreateOrConnectWithoutDonationRequestInput[]
    upsert?: DonationRequestmentUpsertWithWhereUniqueWithoutDonationRequestInput | DonationRequestmentUpsertWithWhereUniqueWithoutDonationRequestInput[]
    createMany?: DonationRequestmentCreateManyDonationRequestInputEnvelope
    set?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    disconnect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    delete?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    connect?: DonationRequestmentWhereUniqueInput | DonationRequestmentWhereUniqueInput[]
    update?: DonationRequestmentUpdateWithWhereUniqueWithoutDonationRequestInput | DonationRequestmentUpdateWithWhereUniqueWithoutDonationRequestInput[]
    updateMany?: DonationRequestmentUpdateManyWithWhereWithoutDonationRequestInput | DonationRequestmentUpdateManyWithWhereWithoutDonationRequestInput[]
    deleteMany?: DonationRequestmentScalarWhereInput | DonationRequestmentScalarWhereInput[]
  }

  export type DonationRequestCreateNestedOneWithoutPhotoDonationsInput = {
    create?: XOR<DonationRequestCreateWithoutPhotoDonationsInput, DonationRequestUncheckedCreateWithoutPhotoDonationsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutPhotoDonationsInput
    connect?: DonationRequestWhereUniqueInput
  }

  export type DonationRequestUpdateOneRequiredWithoutPhotoDonationsNestedInput = {
    create?: XOR<DonationRequestCreateWithoutPhotoDonationsInput, DonationRequestUncheckedCreateWithoutPhotoDonationsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutPhotoDonationsInput
    upsert?: DonationRequestUpsertWithoutPhotoDonationsInput
    connect?: DonationRequestWhereUniqueInput
    update?: XOR<XOR<DonationRequestUpdateToOneWithWhereWithoutPhotoDonationsInput, DonationRequestUpdateWithoutPhotoDonationsInput>, DonationRequestUncheckedUpdateWithoutPhotoDonationsInput>
  }

  export type DonationRequestCreateNestedOneWithoutFulfillmentsInput = {
    create?: XOR<DonationRequestCreateWithoutFulfillmentsInput, DonationRequestUncheckedCreateWithoutFulfillmentsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutFulfillmentsInput
    connect?: DonationRequestWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutFulfillmentInput = {
    create?: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutFulfillmentInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type ChatRoomUncheckedCreateNestedOneWithoutFulfillmentInput = {
    create?: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutFulfillmentInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type DonationRequestUpdateOneRequiredWithoutFulfillmentsNestedInput = {
    create?: XOR<DonationRequestCreateWithoutFulfillmentsInput, DonationRequestUncheckedCreateWithoutFulfillmentsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutFulfillmentsInput
    upsert?: DonationRequestUpsertWithoutFulfillmentsInput
    connect?: DonationRequestWhereUniqueInput
    update?: XOR<XOR<DonationRequestUpdateToOneWithWhereWithoutFulfillmentsInput, DonationRequestUpdateWithoutFulfillmentsInput>, DonationRequestUncheckedUpdateWithoutFulfillmentsInput>
  }

  export type ChatRoomUpdateOneWithoutFulfillmentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutFulfillmentInput
    upsert?: ChatRoomUpsertWithoutFulfillmentInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutFulfillmentInput, ChatRoomUpdateWithoutFulfillmentInput>, ChatRoomUncheckedUpdateWithoutFulfillmentInput>
  }

  export type ChatRoomUncheckedUpdateOneWithoutFulfillmentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutFulfillmentInput
    upsert?: ChatRoomUpsertWithoutFulfillmentInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutFulfillmentInput, ChatRoomUpdateWithoutFulfillmentInput>, ChatRoomUncheckedUpdateWithoutFulfillmentInput>
  }

  export type DonationRequestCreateNestedOneWithoutDonationRequestmentsInput = {
    create?: XOR<DonationRequestCreateWithoutDonationRequestmentsInput, DonationRequestUncheckedCreateWithoutDonationRequestmentsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutDonationRequestmentsInput
    connect?: DonationRequestWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutRequestmentInput = {
    create?: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutRequestmentInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type ChatRoomUncheckedCreateNestedOneWithoutRequestmentInput = {
    create?: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutRequestmentInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type DonationRequestUpdateOneRequiredWithoutDonationRequestmentsNestedInput = {
    create?: XOR<DonationRequestCreateWithoutDonationRequestmentsInput, DonationRequestUncheckedCreateWithoutDonationRequestmentsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutDonationRequestmentsInput
    upsert?: DonationRequestUpsertWithoutDonationRequestmentsInput
    connect?: DonationRequestWhereUniqueInput
    update?: XOR<XOR<DonationRequestUpdateToOneWithWhereWithoutDonationRequestmentsInput, DonationRequestUpdateWithoutDonationRequestmentsInput>, DonationRequestUncheckedUpdateWithoutDonationRequestmentsInput>
  }

  export type ChatRoomUpdateOneWithoutRequestmentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutRequestmentInput
    upsert?: ChatRoomUpsertWithoutRequestmentInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutRequestmentInput, ChatRoomUpdateWithoutRequestmentInput>, ChatRoomUncheckedUpdateWithoutRequestmentInput>
  }

  export type ChatRoomUncheckedUpdateOneWithoutRequestmentNestedInput = {
    create?: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutRequestmentInput
    upsert?: ChatRoomUpsertWithoutRequestmentInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutRequestmentInput, ChatRoomUpdateWithoutRequestmentInput>, ChatRoomUncheckedUpdateWithoutRequestmentInput>
  }

  export type ChatCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutReadByInput = {
    create?: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput> | ChatCreateWithoutReadByInput[] | ChatUncheckedCreateWithoutReadByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReadByInput | ChatCreateOrConnectWithoutReadByInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatRoomMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutReadByInput = {
    create?: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput> | ChatCreateWithoutReadByInput[] | ChatUncheckedCreateWithoutReadByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReadByInput | ChatCreateOrConnectWithoutReadByInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ChatUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutReadByNestedInput = {
    create?: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput> | ChatCreateWithoutReadByInput[] | ChatUncheckedCreateWithoutReadByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReadByInput | ChatCreateOrConnectWithoutReadByInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReadByInput | ChatUpsertWithWhereUniqueWithoutReadByInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReadByInput | ChatUpdateWithWhereUniqueWithoutReadByInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReadByInput | ChatUpdateManyWithWhereWithoutReadByInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatRoomMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput> | ChatCreateWithoutSenderInput[] | ChatUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutSenderInput | ChatCreateOrConnectWithoutSenderInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutSenderInput | ChatUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatCreateManySenderInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutSenderInput | ChatUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutSenderInput | ChatUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutReadByNestedInput = {
    create?: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput> | ChatCreateWithoutReadByInput[] | ChatUncheckedCreateWithoutReadByInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutReadByInput | ChatCreateOrConnectWithoutReadByInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutReadByInput | ChatUpsertWithWhereUniqueWithoutReadByInput[]
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutReadByInput | ChatUpdateWithWhereUniqueWithoutReadByInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutReadByInput | ChatUpdateManyWithWhereWithoutReadByInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput> | ChatRoomMemberCreateWithoutUserInput[] | ChatRoomMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutUserInput | ChatRoomMemberCreateOrConnectWithoutUserInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput | ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatRoomMemberCreateManyUserInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput | ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutUserInput | ChatRoomMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type DonationRequestCreateNestedOneWithoutChatRoomsInput = {
    create?: XOR<DonationRequestCreateWithoutChatRoomsInput, DonationRequestUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutChatRoomsInput
    connect?: DonationRequestWhereUniqueInput
  }

  export type DonationFulfillmentCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<DonationFulfillmentCreateWithoutChatRoomInput, DonationFulfillmentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutChatRoomInput
    connect?: DonationFulfillmentWhereUniqueInput
  }

  export type DonationRequestmentCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<DonationRequestmentCreateWithoutChatRoomInput, DonationRequestmentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutChatRoomInput
    connect?: DonationRequestmentWhereUniqueInput
  }

  export type ChatRoomMemberCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput> | ChatRoomMemberCreateWithoutRoomInput[] | ChatRoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutRoomInput | ChatRoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: ChatRoomMemberCreateManyRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput> | ChatCreateWithoutRoomInput[] | ChatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutRoomInput | ChatCreateOrConnectWithoutRoomInput[]
    createMany?: ChatCreateManyRoomInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput> | ChatRoomMemberCreateWithoutRoomInput[] | ChatRoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutRoomInput | ChatRoomMemberCreateOrConnectWithoutRoomInput[]
    createMany?: ChatRoomMemberCreateManyRoomInputEnvelope
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput> | ChatCreateWithoutRoomInput[] | ChatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutRoomInput | ChatCreateOrConnectWithoutRoomInput[]
    createMany?: ChatCreateManyRoomInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput = {
    create?: XOR<DonationRequestCreateWithoutChatRoomsInput, DonationRequestUncheckedCreateWithoutChatRoomsInput>
    connectOrCreate?: DonationRequestCreateOrConnectWithoutChatRoomsInput
    upsert?: DonationRequestUpsertWithoutChatRoomsInput
    connect?: DonationRequestWhereUniqueInput
    update?: XOR<XOR<DonationRequestUpdateToOneWithWhereWithoutChatRoomsInput, DonationRequestUpdateWithoutChatRoomsInput>, DonationRequestUncheckedUpdateWithoutChatRoomsInput>
  }

  export type DonationFulfillmentUpdateOneWithoutChatRoomNestedInput = {
    create?: XOR<DonationFulfillmentCreateWithoutChatRoomInput, DonationFulfillmentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: DonationFulfillmentCreateOrConnectWithoutChatRoomInput
    upsert?: DonationFulfillmentUpsertWithoutChatRoomInput
    disconnect?: DonationFulfillmentWhereInput | boolean
    delete?: DonationFulfillmentWhereInput | boolean
    connect?: DonationFulfillmentWhereUniqueInput
    update?: XOR<XOR<DonationFulfillmentUpdateToOneWithWhereWithoutChatRoomInput, DonationFulfillmentUpdateWithoutChatRoomInput>, DonationFulfillmentUncheckedUpdateWithoutChatRoomInput>
  }

  export type DonationRequestmentUpdateOneWithoutChatRoomNestedInput = {
    create?: XOR<DonationRequestmentCreateWithoutChatRoomInput, DonationRequestmentUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: DonationRequestmentCreateOrConnectWithoutChatRoomInput
    upsert?: DonationRequestmentUpsertWithoutChatRoomInput
    disconnect?: DonationRequestmentWhereInput | boolean
    delete?: DonationRequestmentWhereInput | boolean
    connect?: DonationRequestmentWhereUniqueInput
    update?: XOR<XOR<DonationRequestmentUpdateToOneWithWhereWithoutChatRoomInput, DonationRequestmentUpdateWithoutChatRoomInput>, DonationRequestmentUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatRoomMemberUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput> | ChatRoomMemberCreateWithoutRoomInput[] | ChatRoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutRoomInput | ChatRoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatRoomMemberCreateManyRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput> | ChatCreateWithoutRoomInput[] | ChatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutRoomInput | ChatCreateOrConnectWithoutRoomInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutRoomInput | ChatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatCreateManyRoomInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutRoomInput | ChatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutRoomInput | ChatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput> | ChatRoomMemberCreateWithoutRoomInput[] | ChatRoomMemberUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatRoomMemberCreateOrConnectWithoutRoomInput | ChatRoomMemberCreateOrConnectWithoutRoomInput[]
    upsert?: ChatRoomMemberUpsertWithWhereUniqueWithoutRoomInput | ChatRoomMemberUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatRoomMemberCreateManyRoomInputEnvelope
    set?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    disconnect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    delete?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    connect?: ChatRoomMemberWhereUniqueInput | ChatRoomMemberWhereUniqueInput[]
    update?: ChatRoomMemberUpdateWithWhereUniqueWithoutRoomInput | ChatRoomMemberUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatRoomMemberUpdateManyWithWhereWithoutRoomInput | ChatRoomMemberUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput> | ChatCreateWithoutRoomInput[] | ChatUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutRoomInput | ChatCreateOrConnectWithoutRoomInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutRoomInput | ChatUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: ChatCreateManyRoomInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutRoomInput | ChatUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutRoomInput | ChatUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoomsInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatRoomCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoomsInput
    upsert?: UserUpsertWithoutRoomsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoomsInput, UserUpdateWithoutRoomsInput>, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type ChatRoomUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMembersInput
    upsert?: ChatRoomUpsertWithoutMembersInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMembersInput, ChatRoomUpdateWithoutMembersInput>, ChatRoomUncheckedUpdateWithoutMembersInput>
  }

  export type ChatRoomCreateNestedOneWithoutChatsInput = {
    create?: XOR<ChatRoomCreateWithoutChatsInput, ChatRoomUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatsInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReadMessagesInput = {
    create?: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput> | UserCreateWithoutReadMessagesInput[] | UserUncheckedCreateWithoutReadMessagesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReadMessagesInput | UserCreateOrConnectWithoutReadMessagesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReadMessagesInput = {
    create?: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput> | UserCreateWithoutReadMessagesInput[] | UserUncheckedCreateWithoutReadMessagesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReadMessagesInput | UserCreateOrConnectWithoutReadMessagesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ChatRoomUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<ChatRoomCreateWithoutChatsInput, ChatRoomUncheckedCreateWithoutChatsInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutChatsInput
    upsert?: ChatRoomUpsertWithoutChatsInput
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutChatsInput, ChatRoomUpdateWithoutChatsInput>, ChatRoomUncheckedUpdateWithoutChatsInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateManyWithoutReadMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput> | UserCreateWithoutReadMessagesInput[] | UserUncheckedCreateWithoutReadMessagesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReadMessagesInput | UserCreateOrConnectWithoutReadMessagesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReadMessagesInput | UserUpsertWithWhereUniqueWithoutReadMessagesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReadMessagesInput | UserUpdateWithWhereUniqueWithoutReadMessagesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReadMessagesInput | UserUpdateManyWithWhereWithoutReadMessagesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutReadMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput> | UserCreateWithoutReadMessagesInput[] | UserUncheckedCreateWithoutReadMessagesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReadMessagesInput | UserCreateOrConnectWithoutReadMessagesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReadMessagesInput | UserUpsertWithWhereUniqueWithoutReadMessagesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReadMessagesInput | UserUpdateWithWhereUniqueWithoutReadMessagesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReadMessagesInput | UserUpdateManyWithWhereWithoutReadMessagesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PhotoDonationCreateWithoutDonationRequestInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDonationUncheckedCreateWithoutDonationRequestInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PhotoDonationCreateOrConnectWithoutDonationRequestInput = {
    where: PhotoDonationWhereUniqueInput
    create: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput>
  }

  export type PhotoDonationCreateManyDonationRequestInputEnvelope = {
    data: PhotoDonationCreateManyDonationRequestInput | PhotoDonationCreateManyDonationRequestInput[]
    skipDuplicates?: boolean
  }

  export type DonationFulfillmentCreateWithoutDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    chatRoom?: ChatRoomCreateNestedOneWithoutFulfillmentInput
  }

  export type DonationFulfillmentUncheckedCreateWithoutDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    chatRoom?: ChatRoomUncheckedCreateNestedOneWithoutFulfillmentInput
  }

  export type DonationFulfillmentCreateOrConnectWithoutDonationRequestInput = {
    where: DonationFulfillmentWhereUniqueInput
    create: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput>
  }

  export type DonationFulfillmentCreateManyDonationRequestInputEnvelope = {
    data: DonationFulfillmentCreateManyDonationRequestInput | DonationFulfillmentCreateManyDonationRequestInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutDonationInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fulfillment?: DonationFulfillmentCreateNestedOneWithoutChatRoomInput
    requestment?: DonationRequestmentCreateNestedOneWithoutChatRoomInput
    members?: ChatRoomMemberCreateNestedManyWithoutRoomInput
    chats?: ChatCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutDonationInput = {
    id?: string
    roomId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput
    chats?: ChatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutDonationInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput>
  }

  export type ChatRoomCreateManyDonationInputEnvelope = {
    data: ChatRoomCreateManyDonationInput | ChatRoomCreateManyDonationInput[]
    skipDuplicates?: boolean
  }

  export type DonationRequestmentCreateWithoutDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    chatRoom?: ChatRoomCreateNestedOneWithoutRequestmentInput
  }

  export type DonationRequestmentUncheckedCreateWithoutDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    chatRoom?: ChatRoomUncheckedCreateNestedOneWithoutRequestmentInput
  }

  export type DonationRequestmentCreateOrConnectWithoutDonationRequestInput = {
    where: DonationRequestmentWhereUniqueInput
    create: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput>
  }

  export type DonationRequestmentCreateManyDonationRequestInputEnvelope = {
    data: DonationRequestmentCreateManyDonationRequestInput | DonationRequestmentCreateManyDonationRequestInput[]
    skipDuplicates?: boolean
  }

  export type PhotoDonationUpsertWithWhereUniqueWithoutDonationRequestInput = {
    where: PhotoDonationWhereUniqueInput
    update: XOR<PhotoDonationUpdateWithoutDonationRequestInput, PhotoDonationUncheckedUpdateWithoutDonationRequestInput>
    create: XOR<PhotoDonationCreateWithoutDonationRequestInput, PhotoDonationUncheckedCreateWithoutDonationRequestInput>
  }

  export type PhotoDonationUpdateWithWhereUniqueWithoutDonationRequestInput = {
    where: PhotoDonationWhereUniqueInput
    data: XOR<PhotoDonationUpdateWithoutDonationRequestInput, PhotoDonationUncheckedUpdateWithoutDonationRequestInput>
  }

  export type PhotoDonationUpdateManyWithWhereWithoutDonationRequestInput = {
    where: PhotoDonationScalarWhereInput
    data: XOR<PhotoDonationUpdateManyMutationInput, PhotoDonationUncheckedUpdateManyWithoutDonationRequestInput>
  }

  export type PhotoDonationScalarWhereInput = {
    AND?: PhotoDonationScalarWhereInput | PhotoDonationScalarWhereInput[]
    OR?: PhotoDonationScalarWhereInput[]
    NOT?: PhotoDonationScalarWhereInput | PhotoDonationScalarWhereInput[]
    id?: StringFilter<"PhotoDonation"> | string
    imageFile?: StringFilter<"PhotoDonation"> | string
    createdAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    updatedAt?: DateTimeFilter<"PhotoDonation"> | Date | string
    donationRequestId?: StringFilter<"PhotoDonation"> | string
  }

  export type DonationFulfillmentUpsertWithWhereUniqueWithoutDonationRequestInput = {
    where: DonationFulfillmentWhereUniqueInput
    update: XOR<DonationFulfillmentUpdateWithoutDonationRequestInput, DonationFulfillmentUncheckedUpdateWithoutDonationRequestInput>
    create: XOR<DonationFulfillmentCreateWithoutDonationRequestInput, DonationFulfillmentUncheckedCreateWithoutDonationRequestInput>
  }

  export type DonationFulfillmentUpdateWithWhereUniqueWithoutDonationRequestInput = {
    where: DonationFulfillmentWhereUniqueInput
    data: XOR<DonationFulfillmentUpdateWithoutDonationRequestInput, DonationFulfillmentUncheckedUpdateWithoutDonationRequestInput>
  }

  export type DonationFulfillmentUpdateManyWithWhereWithoutDonationRequestInput = {
    where: DonationFulfillmentScalarWhereInput
    data: XOR<DonationFulfillmentUpdateManyMutationInput, DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestInput>
  }

  export type DonationFulfillmentScalarWhereInput = {
    AND?: DonationFulfillmentScalarWhereInput | DonationFulfillmentScalarWhereInput[]
    OR?: DonationFulfillmentScalarWhereInput[]
    NOT?: DonationFulfillmentScalarWhereInput | DonationFulfillmentScalarWhereInput[]
    id?: StringFilter<"DonationFulfillment"> | string
    createdAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationFulfillment"> | Date | string
    donorFirebaseId?: StringFilter<"DonationFulfillment"> | string
    donorRequestFirebaseId?: StringNullableFilter<"DonationFulfillment"> | string | null
    donorName?: StringFilter<"DonationFulfillment"> | string
    donorNotes?: StringFilter<"DonationFulfillment"> | string
    latitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    longitude?: FloatNullableFilter<"DonationFulfillment"> | number | null
    address?: StringNullableFilter<"DonationFulfillment"> | string | null
    city?: StringNullableFilter<"DonationFulfillment"> | string | null
    status?: EnumRequestStatusFilter<"DonationFulfillment"> | $Enums.RequestStatus
    donationRequestId?: StringFilter<"DonationFulfillment"> | string
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutDonationInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutDonationInput, ChatRoomUncheckedUpdateWithoutDonationInput>
    create: XOR<ChatRoomCreateWithoutDonationInput, ChatRoomUncheckedCreateWithoutDonationInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutDonationInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutDonationInput, ChatRoomUncheckedUpdateWithoutDonationInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutDonationInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutDonationInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: StringFilter<"ChatRoom"> | string
    roomId?: StringFilter<"ChatRoom"> | string
    donationRequestId?: StringFilter<"ChatRoom"> | string
    fulfillmentId?: StringNullableFilter<"ChatRoom"> | string | null
    requestmentId?: StringNullableFilter<"ChatRoom"> | string | null
    isActive?: BoolFilter<"ChatRoom"> | boolean
    lastMessage?: StringFilter<"ChatRoom"> | string
    lastSeen?: DateTimeFilter<"ChatRoom"> | Date | string
    unreadCount?: IntFilter<"ChatRoom"> | number
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
  }

  export type DonationRequestmentUpsertWithWhereUniqueWithoutDonationRequestInput = {
    where: DonationRequestmentWhereUniqueInput
    update: XOR<DonationRequestmentUpdateWithoutDonationRequestInput, DonationRequestmentUncheckedUpdateWithoutDonationRequestInput>
    create: XOR<DonationRequestmentCreateWithoutDonationRequestInput, DonationRequestmentUncheckedCreateWithoutDonationRequestInput>
  }

  export type DonationRequestmentUpdateWithWhereUniqueWithoutDonationRequestInput = {
    where: DonationRequestmentWhereUniqueInput
    data: XOR<DonationRequestmentUpdateWithoutDonationRequestInput, DonationRequestmentUncheckedUpdateWithoutDonationRequestInput>
  }

  export type DonationRequestmentUpdateManyWithWhereWithoutDonationRequestInput = {
    where: DonationRequestmentScalarWhereInput
    data: XOR<DonationRequestmentUpdateManyMutationInput, DonationRequestmentUncheckedUpdateManyWithoutDonationRequestInput>
  }

  export type DonationRequestmentScalarWhereInput = {
    AND?: DonationRequestmentScalarWhereInput | DonationRequestmentScalarWhereInput[]
    OR?: DonationRequestmentScalarWhereInput[]
    NOT?: DonationRequestmentScalarWhereInput | DonationRequestmentScalarWhereInput[]
    id?: StringFilter<"DonationRequestment"> | string
    createdAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    updatedAt?: DateTimeFilter<"DonationRequestment"> | Date | string
    requestorId?: StringFilter<"DonationRequestment"> | string
    donorFirebaseId?: StringNullableFilter<"DonationRequestment"> | string | null
    status?: EnumRequestStatusFilter<"DonationRequestment"> | $Enums.RequestStatus
    donorName?: StringFilter<"DonationRequestment"> | string
    reason?: StringFilter<"DonationRequestment"> | string
    latitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    longitude?: FloatNullableFilter<"DonationRequestment"> | number | null
    address?: StringNullableFilter<"DonationRequestment"> | string | null
    city?: StringNullableFilter<"DonationRequestment"> | string | null
    donationRequestId?: StringFilter<"DonationRequestment"> | string
  }

  export type DonationRequestCreateWithoutPhotoDonationsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    fulfillments?: DonationFulfillmentCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestUncheckedCreateWithoutPhotoDonationsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    fulfillments?: DonationFulfillmentUncheckedCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentUncheckedCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestCreateOrConnectWithoutPhotoDonationsInput = {
    where: DonationRequestWhereUniqueInput
    create: XOR<DonationRequestCreateWithoutPhotoDonationsInput, DonationRequestUncheckedCreateWithoutPhotoDonationsInput>
  }

  export type DonationRequestUpsertWithoutPhotoDonationsInput = {
    update: XOR<DonationRequestUpdateWithoutPhotoDonationsInput, DonationRequestUncheckedUpdateWithoutPhotoDonationsInput>
    create: XOR<DonationRequestCreateWithoutPhotoDonationsInput, DonationRequestUncheckedCreateWithoutPhotoDonationsInput>
    where?: DonationRequestWhereInput
  }

  export type DonationRequestUpdateToOneWithWhereWithoutPhotoDonationsInput = {
    where?: DonationRequestWhereInput
    data: XOR<DonationRequestUpdateWithoutPhotoDonationsInput, DonationRequestUncheckedUpdateWithoutPhotoDonationsInput>
  }

  export type DonationRequestUpdateWithoutPhotoDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfillments?: DonationFulfillmentUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestUncheckedUpdateWithoutPhotoDonationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fulfillments?: DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUncheckedUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestCreateWithoutFulfillmentsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestUncheckedCreateWithoutFulfillmentsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationUncheckedCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutDonationInput
    donationRequestments?: DonationRequestmentUncheckedCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestCreateOrConnectWithoutFulfillmentsInput = {
    where: DonationRequestWhereUniqueInput
    create: XOR<DonationRequestCreateWithoutFulfillmentsInput, DonationRequestUncheckedCreateWithoutFulfillmentsInput>
  }

  export type ChatRoomCreateWithoutFulfillmentInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donation: DonationRequestCreateNestedOneWithoutChatRoomsInput
    requestment?: DonationRequestmentCreateNestedOneWithoutChatRoomInput
    members?: ChatRoomMemberCreateNestedManyWithoutRoomInput
    chats?: ChatCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutFulfillmentInput = {
    id?: string
    roomId: string
    donationRequestId: string
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput
    chats?: ChatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutFulfillmentInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
  }

  export type DonationRequestUpsertWithoutFulfillmentsInput = {
    update: XOR<DonationRequestUpdateWithoutFulfillmentsInput, DonationRequestUncheckedUpdateWithoutFulfillmentsInput>
    create: XOR<DonationRequestCreateWithoutFulfillmentsInput, DonationRequestUncheckedCreateWithoutFulfillmentsInput>
    where?: DonationRequestWhereInput
  }

  export type DonationRequestUpdateToOneWithWhereWithoutFulfillmentsInput = {
    where?: DonationRequestWhereInput
    data: XOR<DonationRequestUpdateWithoutFulfillmentsInput, DonationRequestUncheckedUpdateWithoutFulfillmentsInput>
  }

  export type DonationRequestUpdateWithoutFulfillmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestUncheckedUpdateWithoutFulfillmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUncheckedUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutDonationNestedInput
    donationRequestments?: DonationRequestmentUncheckedUpdateManyWithoutDonationRequestNestedInput
  }

  export type ChatRoomUpsertWithoutFulfillmentInput = {
    update: XOR<ChatRoomUpdateWithoutFulfillmentInput, ChatRoomUncheckedUpdateWithoutFulfillmentInput>
    create: XOR<ChatRoomCreateWithoutFulfillmentInput, ChatRoomUncheckedCreateWithoutFulfillmentInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutFulfillmentInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutFulfillmentInput, ChatRoomUncheckedUpdateWithoutFulfillmentInput>
  }

  export type ChatRoomUpdateWithoutFulfillmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput
    requestment?: DonationRequestmentUpdateOneWithoutChatRoomNestedInput
    members?: ChatRoomMemberUpdateManyWithoutRoomNestedInput
    chats?: ChatUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutFulfillmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    chats?: ChatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type DonationRequestCreateWithoutDonationRequestmentsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomCreateNestedManyWithoutDonationInput
  }

  export type DonationRequestUncheckedCreateWithoutDonationRequestmentsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationUncheckedCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentUncheckedCreateNestedManyWithoutDonationRequestInput
    chatRooms?: ChatRoomUncheckedCreateNestedManyWithoutDonationInput
  }

  export type DonationRequestCreateOrConnectWithoutDonationRequestmentsInput = {
    where: DonationRequestWhereUniqueInput
    create: XOR<DonationRequestCreateWithoutDonationRequestmentsInput, DonationRequestUncheckedCreateWithoutDonationRequestmentsInput>
  }

  export type ChatRoomCreateWithoutRequestmentInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donation: DonationRequestCreateNestedOneWithoutChatRoomsInput
    fulfillment?: DonationFulfillmentCreateNestedOneWithoutChatRoomInput
    members?: ChatRoomMemberCreateNestedManyWithoutRoomInput
    chats?: ChatCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutRequestmentInput = {
    id?: string
    roomId: string
    donationRequestId: string
    fulfillmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput
    chats?: ChatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutRequestmentInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
  }

  export type DonationRequestUpsertWithoutDonationRequestmentsInput = {
    update: XOR<DonationRequestUpdateWithoutDonationRequestmentsInput, DonationRequestUncheckedUpdateWithoutDonationRequestmentsInput>
    create: XOR<DonationRequestCreateWithoutDonationRequestmentsInput, DonationRequestUncheckedCreateWithoutDonationRequestmentsInput>
    where?: DonationRequestWhereInput
  }

  export type DonationRequestUpdateToOneWithWhereWithoutDonationRequestmentsInput = {
    where?: DonationRequestWhereInput
    data: XOR<DonationRequestUpdateWithoutDonationRequestmentsInput, DonationRequestUncheckedUpdateWithoutDonationRequestmentsInput>
  }

  export type DonationRequestUpdateWithoutDonationRequestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUpdateManyWithoutDonationNestedInput
  }

  export type DonationRequestUncheckedUpdateWithoutDonationRequestmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUncheckedUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestNestedInput
    chatRooms?: ChatRoomUncheckedUpdateManyWithoutDonationNestedInput
  }

  export type ChatRoomUpsertWithoutRequestmentInput = {
    update: XOR<ChatRoomUpdateWithoutRequestmentInput, ChatRoomUncheckedUpdateWithoutRequestmentInput>
    create: XOR<ChatRoomCreateWithoutRequestmentInput, ChatRoomUncheckedCreateWithoutRequestmentInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutRequestmentInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutRequestmentInput, ChatRoomUncheckedUpdateWithoutRequestmentInput>
  }

  export type ChatRoomUpdateWithoutRequestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput
    fulfillment?: DonationFulfillmentUpdateOneWithoutChatRoomNestedInput
    members?: ChatRoomMemberUpdateManyWithoutRoomNestedInput
    chats?: ChatUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutRequestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    chats?: ChatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatCreateWithoutSenderInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutChatsInput
    readBy?: UserCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatUncheckedCreateWithoutSenderInput = {
    id?: string
    roomId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readBy?: UserUncheckedCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatCreateOrConnectWithoutSenderInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatCreateManySenderInputEnvelope = {
    data: ChatCreateManySenderInput | ChatCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutReadByInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutChatsInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type ChatUncheckedCreateWithoutReadByInput = {
    id?: string
    roomId: string
    senderId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutReadByInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput>
  }

  export type ChatRoomMemberCreateWithoutUserInput = {
    joinedAt?: Date | string
    room: ChatRoomCreateNestedOneWithoutMembersInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutUserInput = {
    roomId: string
    joinedAt?: Date | string
  }

  export type ChatRoomMemberCreateOrConnectWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberCreateManyUserInputEnvelope = {
    data: ChatRoomMemberCreateManyUserInput | ChatRoomMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatCreateWithoutSenderInput, ChatUncheckedCreateWithoutSenderInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutSenderInput, ChatUncheckedUpdateWithoutSenderInput>
  }

  export type ChatUpdateManyWithWhereWithoutSenderInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    roomId?: StringFilter<"Chat"> | string
    senderId?: StringFilter<"Chat"> | string
    message?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type ChatUpsertWithWhereUniqueWithoutReadByInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutReadByInput, ChatUncheckedUpdateWithoutReadByInput>
    create: XOR<ChatCreateWithoutReadByInput, ChatUncheckedCreateWithoutReadByInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutReadByInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutReadByInput, ChatUncheckedUpdateWithoutReadByInput>
  }

  export type ChatUpdateManyWithWhereWithoutReadByInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutReadByInput>
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
    create: XOR<ChatRoomMemberCreateWithoutUserInput, ChatRoomMemberUncheckedCreateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutUserInput, ChatRoomMemberUncheckedUpdateWithoutUserInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutUserInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatRoomMemberScalarWhereInput = {
    AND?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    OR?: ChatRoomMemberScalarWhereInput[]
    NOT?: ChatRoomMemberScalarWhereInput | ChatRoomMemberScalarWhereInput[]
    userId?: StringFilter<"ChatRoomMember"> | string
    roomId?: StringFilter<"ChatRoomMember"> | string
    joinedAt?: DateTimeFilter<"ChatRoomMember"> | Date | string
  }

  export type DonationRequestCreateWithoutChatRoomsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentCreateNestedManyWithoutDonationRequestInput
    donationRequestments?: DonationRequestmentCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestUncheckedCreateWithoutChatRoomsInput = {
    id?: string
    namaBarang?: string | null
    requestorFirebaseId: string
    requestorName: string
    donationType?: string | null
    detailBarang?: string | null
    alasanDonasi?: string | null
    locationDescription: string
    latitude?: number | null
    longitude?: number | null
    city?: string | null
    description: string
    itemType: string
    itemWeight?: number | null
    weightUnit?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    expiredAt?: Date | string | null
    photoDonations?: PhotoDonationUncheckedCreateNestedManyWithoutDonationRequestInput
    fulfillments?: DonationFulfillmentUncheckedCreateNestedManyWithoutDonationRequestInput
    donationRequestments?: DonationRequestmentUncheckedCreateNestedManyWithoutDonationRequestInput
  }

  export type DonationRequestCreateOrConnectWithoutChatRoomsInput = {
    where: DonationRequestWhereUniqueInput
    create: XOR<DonationRequestCreateWithoutChatRoomsInput, DonationRequestUncheckedCreateWithoutChatRoomsInput>
  }

  export type DonationFulfillmentCreateWithoutChatRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    donationRequest: DonationRequestCreateNestedOneWithoutFulfillmentsInput
  }

  export type DonationFulfillmentUncheckedCreateWithoutChatRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
    donationRequestId: string
  }

  export type DonationFulfillmentCreateOrConnectWithoutChatRoomInput = {
    where: DonationFulfillmentWhereUniqueInput
    create: XOR<DonationFulfillmentCreateWithoutChatRoomInput, DonationFulfillmentUncheckedCreateWithoutChatRoomInput>
  }

  export type DonationRequestmentCreateWithoutChatRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    donationRequest: DonationRequestCreateNestedOneWithoutDonationRequestmentsInput
  }

  export type DonationRequestmentUncheckedCreateWithoutChatRoomInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    donationRequestId: string
  }

  export type DonationRequestmentCreateOrConnectWithoutChatRoomInput = {
    where: DonationRequestmentWhereUniqueInput
    create: XOR<DonationRequestmentCreateWithoutChatRoomInput, DonationRequestmentUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatRoomMemberCreateWithoutRoomInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutRoomsInput
  }

  export type ChatRoomMemberUncheckedCreateWithoutRoomInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type ChatRoomMemberCreateOrConnectWithoutRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    create: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type ChatRoomMemberCreateManyRoomInputEnvelope = {
    data: ChatRoomMemberCreateManyRoomInput | ChatRoomMemberCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type ChatCreateWithoutRoomInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    readBy?: UserCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatUncheckedCreateWithoutRoomInput = {
    id?: string
    senderId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readBy?: UserUncheckedCreateNestedManyWithoutReadMessagesInput
  }

  export type ChatCreateOrConnectWithoutRoomInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput>
  }

  export type ChatCreateManyRoomInputEnvelope = {
    data: ChatCreateManyRoomInput | ChatCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type DonationRequestUpsertWithoutChatRoomsInput = {
    update: XOR<DonationRequestUpdateWithoutChatRoomsInput, DonationRequestUncheckedUpdateWithoutChatRoomsInput>
    create: XOR<DonationRequestCreateWithoutChatRoomsInput, DonationRequestUncheckedCreateWithoutChatRoomsInput>
    where?: DonationRequestWhereInput
  }

  export type DonationRequestUpdateToOneWithWhereWithoutChatRoomsInput = {
    where?: DonationRequestWhereInput
    data: XOR<DonationRequestUpdateWithoutChatRoomsInput, DonationRequestUncheckedUpdateWithoutChatRoomsInput>
  }

  export type DonationRequestUpdateWithoutChatRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUpdateManyWithoutDonationRequestNestedInput
    donationRequestments?: DonationRequestmentUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationRequestUncheckedUpdateWithoutChatRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    namaBarang?: NullableStringFieldUpdateOperationsInput | string | null
    requestorFirebaseId?: StringFieldUpdateOperationsInput | string
    requestorName?: StringFieldUpdateOperationsInput | string
    donationType?: NullableStringFieldUpdateOperationsInput | string | null
    detailBarang?: NullableStringFieldUpdateOperationsInput | string | null
    alasanDonasi?: NullableStringFieldUpdateOperationsInput | string | null
    locationDescription?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    itemType?: StringFieldUpdateOperationsInput | string
    itemWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    weightUnit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    photoDonations?: PhotoDonationUncheckedUpdateManyWithoutDonationRequestNestedInput
    fulfillments?: DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestNestedInput
    donationRequestments?: DonationRequestmentUncheckedUpdateManyWithoutDonationRequestNestedInput
  }

  export type DonationFulfillmentUpsertWithoutChatRoomInput = {
    update: XOR<DonationFulfillmentUpdateWithoutChatRoomInput, DonationFulfillmentUncheckedUpdateWithoutChatRoomInput>
    create: XOR<DonationFulfillmentCreateWithoutChatRoomInput, DonationFulfillmentUncheckedCreateWithoutChatRoomInput>
    where?: DonationFulfillmentWhereInput
  }

  export type DonationFulfillmentUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: DonationFulfillmentWhereInput
    data: XOR<DonationFulfillmentUpdateWithoutChatRoomInput, DonationFulfillmentUncheckedUpdateWithoutChatRoomInput>
  }

  export type DonationFulfillmentUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donationRequest?: DonationRequestUpdateOneRequiredWithoutFulfillmentsNestedInput
  }

  export type DonationFulfillmentUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type DonationRequestmentUpsertWithoutChatRoomInput = {
    update: XOR<DonationRequestmentUpdateWithoutChatRoomInput, DonationRequestmentUncheckedUpdateWithoutChatRoomInput>
    create: XOR<DonationRequestmentCreateWithoutChatRoomInput, DonationRequestmentUncheckedCreateWithoutChatRoomInput>
    where?: DonationRequestmentWhereInput
  }

  export type DonationRequestmentUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: DonationRequestmentWhereInput
    data: XOR<DonationRequestmentUpdateWithoutChatRoomInput, DonationRequestmentUncheckedUpdateWithoutChatRoomInput>
  }

  export type DonationRequestmentUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    donationRequest?: DonationRequestUpdateOneRequiredWithoutDonationRequestmentsNestedInput
  }

  export type DonationRequestmentUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    donationRequestId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatRoomMemberUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    update: XOR<ChatRoomMemberUpdateWithoutRoomInput, ChatRoomMemberUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatRoomMemberCreateWithoutRoomInput, ChatRoomMemberUncheckedCreateWithoutRoomInput>
  }

  export type ChatRoomMemberUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatRoomMemberWhereUniqueInput
    data: XOR<ChatRoomMemberUpdateWithoutRoomInput, ChatRoomMemberUncheckedUpdateWithoutRoomInput>
  }

  export type ChatRoomMemberUpdateManyWithWhereWithoutRoomInput = {
    where: ChatRoomMemberScalarWhereInput
    data: XOR<ChatRoomMemberUpdateManyMutationInput, ChatRoomMemberUncheckedUpdateManyWithoutRoomInput>
  }

  export type ChatUpsertWithWhereUniqueWithoutRoomInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutRoomInput, ChatUncheckedUpdateWithoutRoomInput>
    create: XOR<ChatCreateWithoutRoomInput, ChatUncheckedCreateWithoutRoomInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutRoomInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutRoomInput, ChatUncheckedUpdateWithoutRoomInput>
  }

  export type ChatUpdateManyWithWhereWithoutRoomInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutRoomsInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    readMessages?: ChatCreateNestedManyWithoutReadByInput
  }

  export type UserUncheckedCreateWithoutRoomsInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    readMessages?: ChatUncheckedCreateNestedManyWithoutReadByInput
  }

  export type UserCreateOrConnectWithoutRoomsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
  }

  export type ChatRoomCreateWithoutMembersInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donation: DonationRequestCreateNestedOneWithoutChatRoomsInput
    fulfillment?: DonationFulfillmentCreateNestedOneWithoutChatRoomInput
    requestment?: DonationRequestmentCreateNestedOneWithoutChatRoomInput
    chats?: ChatCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutMembersInput = {
    id?: string
    roomId: string
    donationRequestId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    chats?: ChatUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutMembersInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutRoomsInput = {
    update: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
    create: XOR<UserCreateWithoutRoomsInput, UserUncheckedCreateWithoutRoomsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoomsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoomsInput, UserUncheckedUpdateWithoutRoomsInput>
  }

  export type UserUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    readMessages?: ChatUpdateManyWithoutReadByNestedInput
  }

  export type UserUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    readMessages?: ChatUncheckedUpdateManyWithoutReadByNestedInput
  }

  export type ChatRoomUpsertWithoutMembersInput = {
    update: XOR<ChatRoomUpdateWithoutMembersInput, ChatRoomUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatRoomCreateWithoutMembersInput, ChatRoomUncheckedCreateWithoutMembersInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMembersInput, ChatRoomUncheckedUpdateWithoutMembersInput>
  }

  export type ChatRoomUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput
    fulfillment?: DonationFulfillmentUpdateOneWithoutChatRoomNestedInput
    requestment?: DonationRequestmentUpdateOneWithoutChatRoomNestedInput
    chats?: ChatUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chats?: ChatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomCreateWithoutChatsInput = {
    id?: string
    roomId: string
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    donation: DonationRequestCreateNestedOneWithoutChatRoomsInput
    fulfillment?: DonationFulfillmentCreateNestedOneWithoutChatRoomInput
    requestment?: DonationRequestmentCreateNestedOneWithoutChatRoomInput
    members?: ChatRoomMemberCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutChatsInput = {
    id?: string
    roomId: string
    donationRequestId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatRoomMemberUncheckedCreateNestedManyWithoutRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutChatsInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutChatsInput, ChatRoomUncheckedCreateWithoutChatsInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readMessages?: ChatCreateNestedManyWithoutReadByInput
    rooms?: ChatRoomMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    readMessages?: ChatUncheckedCreateNestedManyWithoutReadByInput
    rooms?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReadMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatCreateNestedManyWithoutSenderInput
    rooms?: ChatRoomMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadMessagesInput = {
    id?: string
    name?: string | null
    email?: string | null
    role?: string | null
    password?: string | null
    isActive?: boolean
    isDonate?: boolean
    isPhotoId?: boolean
    tokenFcm?: string | null
    identificationNumber?: string | null
    photoKtp?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: ChatUncheckedCreateNestedManyWithoutSenderInput
    rooms?: ChatRoomMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput>
  }

  export type ChatRoomUpsertWithoutChatsInput = {
    update: XOR<ChatRoomUpdateWithoutChatsInput, ChatRoomUncheckedUpdateWithoutChatsInput>
    create: XOR<ChatRoomCreateWithoutChatsInput, ChatRoomUncheckedCreateWithoutChatsInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutChatsInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutChatsInput, ChatRoomUncheckedUpdateWithoutChatsInput>
  }

  export type ChatRoomUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donation?: DonationRequestUpdateOneRequiredWithoutChatRoomsNestedInput
    fulfillment?: DonationFulfillmentUpdateOneWithoutChatRoomNestedInput
    requestment?: DonationRequestmentUpdateOneWithoutChatRoomNestedInput
    members?: ChatRoomMemberUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    donationRequestId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readMessages?: ChatUpdateManyWithoutReadByNestedInput
    rooms?: ChatRoomMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readMessages?: ChatUncheckedUpdateManyWithoutReadByNestedInput
    rooms?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReadMessagesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReadMessagesInput, UserUncheckedUpdateWithoutReadMessagesInput>
    create: XOR<UserCreateWithoutReadMessagesInput, UserUncheckedCreateWithoutReadMessagesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReadMessagesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReadMessagesInput, UserUncheckedUpdateWithoutReadMessagesInput>
  }

  export type UserUpdateManyWithWhereWithoutReadMessagesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReadMessagesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    role?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    isDonate?: BoolFilter<"User"> | boolean
    isPhotoId?: BoolFilter<"User"> | boolean
    tokenFcm?: StringNullableFilter<"User"> | string | null
    identificationNumber?: StringNullableFilter<"User"> | string | null
    photoKtp?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PhotoDonationCreateManyDonationRequestInput = {
    id?: string
    imageFile: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationFulfillmentCreateManyDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    donorFirebaseId: string
    donorRequestFirebaseId?: string | null
    donorName: string
    donorNotes: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
    status?: $Enums.RequestStatus
  }

  export type ChatRoomCreateManyDonationInput = {
    id?: string
    roomId: string
    fulfillmentId?: string | null
    requestmentId?: string | null
    isActive?: boolean
    lastMessage?: string
    lastSeen?: Date | string
    unreadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DonationRequestmentCreateManyDonationRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    requestorId: string
    donorFirebaseId?: string | null
    status?: $Enums.RequestStatus
    donorName: string
    reason: string
    latitude?: number | null
    longitude?: number | null
    address?: string | null
    city?: string | null
  }

  export type PhotoDonationUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDonationUncheckedUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoDonationUncheckedUpdateManyWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageFile?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationFulfillmentUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    chatRoom?: ChatRoomUpdateOneWithoutFulfillmentNestedInput
  }

  export type DonationFulfillmentUncheckedUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    chatRoom?: ChatRoomUncheckedUpdateOneWithoutFulfillmentNestedInput
  }

  export type DonationFulfillmentUncheckedUpdateManyWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    donorFirebaseId?: StringFieldUpdateOperationsInput | string
    donorRequestFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    donorName?: StringFieldUpdateOperationsInput | string
    donorNotes?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type ChatRoomUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fulfillment?: DonationFulfillmentUpdateOneWithoutChatRoomNestedInput
    requestment?: DonationRequestmentUpdateOneWithoutChatRoomNestedInput
    members?: ChatRoomMemberUpdateManyWithoutRoomNestedInput
    chats?: ChatUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatRoomMemberUncheckedUpdateManyWithoutRoomNestedInput
    chats?: ChatUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutDonationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    fulfillmentId?: NullableStringFieldUpdateOperationsInput | string | null
    requestmentId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastMessage?: StringFieldUpdateOperationsInput | string
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    unreadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationRequestmentUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    chatRoom?: ChatRoomUpdateOneWithoutRequestmentNestedInput
  }

  export type DonationRequestmentUncheckedUpdateWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    chatRoom?: ChatRoomUncheckedUpdateOneWithoutRequestmentNestedInput
  }

  export type DonationRequestmentUncheckedUpdateManyWithoutDonationRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requestorId?: StringFieldUpdateOperationsInput | string
    donorFirebaseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    donorName?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatCreateManySenderInput = {
    id?: string
    roomId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomMemberCreateManyUserInput = {
    roomId: string
    joinedAt?: Date | string
  }

  export type ChatUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutChatsNestedInput
    readBy?: UserUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readBy?: UserUncheckedUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutReadByInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutChatsNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type ChatUncheckedUpdateWithoutReadByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyWithoutReadByInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: ChatRoomUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutUserInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberCreateManyRoomInput = {
    userId: string
    joinedAt?: Date | string
  }

  export type ChatCreateManyRoomInput = {
    id?: string
    senderId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatRoomMemberUpdateWithoutRoomInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type ChatRoomMemberUncheckedUpdateWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomMemberUncheckedUpdateManyWithoutRoomInput = {
    userId?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    readBy?: UserUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readBy?: UserUncheckedUpdateManyWithoutReadMessagesNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutReadMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUpdateManyWithoutSenderNestedInput
    rooms?: ChatRoomMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: ChatUncheckedUpdateManyWithoutSenderNestedInput
    rooms?: ChatRoomMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReadMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDonate?: BoolFieldUpdateOperationsInput | boolean
    isPhotoId?: BoolFieldUpdateOperationsInput | boolean
    tokenFcm?: NullableStringFieldUpdateOperationsInput | string | null
    identificationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    photoKtp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}