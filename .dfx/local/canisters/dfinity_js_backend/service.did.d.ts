import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'addProduct' : ActorMethod<
    [
      {
        'attachmentURL' : string,
        'title' : string,
        'description' : string,
        'price' : bigint,
        'location' : string,
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'attachmentURL' : string,
          'title' : string,
          'soldAmount' : bigint,
          'description' : string,
          'seller' : Principal,
          'price' : bigint,
          'location' : string,
        }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'completePurchase' : ActorMethod<
    [Principal, string, bigint, bigint, bigint],
    {
        'Ok' : {
          'status' : { 'PaymentPending' : string } |
            { 'Completed' : string },
          'memo' : bigint,
          'productId' : string,
          'seller' : Principal,
          'price' : bigint,
          'paid_at_block' : [] | [bigint],
        }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'createOrder' : ActorMethod<
    [string],
    {
        'Ok' : {
          'status' : { 'PaymentPending' : string } |
            { 'Completed' : string },
          'memo' : bigint,
          'productId' : string,
          'seller' : Principal,
          'price' : bigint,
          'paid_at_block' : [] | [bigint],
        }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'deleteProduct' : ActorMethod<
    [string],
    { 'Ok' : string } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'getAddressFromPrincipal' : ActorMethod<[Principal], string>,
  'getOrders' : ActorMethod<
    [],
    Array<
      {
        'status' : { 'PaymentPending' : string } |
          { 'Completed' : string },
        'memo' : bigint,
        'productId' : string,
        'seller' : Principal,
        'price' : bigint,
        'paid_at_block' : [] | [bigint],
      }
    >
  >,
  'getPendingOrders' : ActorMethod<
    [],
    Array<
      {
        'status' : { 'PaymentPending' : string } |
          { 'Completed' : string },
        'memo' : bigint,
        'productId' : string,
        'seller' : Principal,
        'price' : bigint,
        'paid_at_block' : [] | [bigint],
      }
    >
  >,
  'getProduct' : ActorMethod<
    [string],
    {
        'Ok' : {
          'id' : string,
          'attachmentURL' : string,
          'title' : string,
          'soldAmount' : bigint,
          'description' : string,
          'seller' : Principal,
          'price' : bigint,
          'location' : string,
        }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'getProducts' : ActorMethod<
    [],
    Array<
      {
        'id' : string,
        'attachmentURL' : string,
        'title' : string,
        'soldAmount' : bigint,
        'description' : string,
        'seller' : Principal,
        'price' : bigint,
        'location' : string,
      }
    >
  >,
  'makePayment' : ActorMethod<
    [string, bigint],
    {
        'Ok' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'updateProduct' : ActorMethod<
    [
      {
        'id' : string,
        'attachmentURL' : string,
        'title' : string,
        'soldAmount' : bigint,
        'description' : string,
        'seller' : Principal,
        'price' : bigint,
        'location' : string,
      },
    ],
    {
        'Ok' : {
          'id' : string,
          'attachmentURL' : string,
          'title' : string,
          'soldAmount' : bigint,
          'description' : string,
          'seller' : Principal,
          'price' : bigint,
          'location' : string,
        }
      } |
      {
        'Err' : { 'PaymentFailed' : string } |
          { 'InvalidPayload' : string } |
          { 'NotFound' : string } |
          { 'PaymentCompleted' : string }
      }
  >,
  'verifyPayment' : ActorMethod<[Principal, bigint, bigint, bigint], boolean>,
}
