export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addProduct' : IDL.Func(
        [
          IDL.Record({
            'attachmentURL' : IDL.Text,
            'title' : IDL.Text,
            'description' : IDL.Text,
            'price' : IDL.Nat64,
            'location' : IDL.Text,
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'attachmentURL' : IDL.Text,
              'title' : IDL.Text,
              'soldAmount' : IDL.Nat64,
              'description' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'location' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'completePurchase' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Nat64, IDL.Nat64, IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'status' : IDL.Variant({
                'PaymentPending' : IDL.Text,
                'Completed' : IDL.Text,
              }),
              'memo' : IDL.Nat64,
              'productId' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'paid_at_block' : IDL.Opt(IDL.Nat64),
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'createOrder' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'status' : IDL.Variant({
                'PaymentPending' : IDL.Text,
                'Completed' : IDL.Text,
              }),
              'memo' : IDL.Nat64,
              'productId' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'paid_at_block' : IDL.Opt(IDL.Nat64),
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'deleteProduct' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Text,
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'getAddressFromPrincipal' : IDL.Func(
        [IDL.Principal],
        [IDL.Text],
        ['query'],
      ),
    'getOrders' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'status' : IDL.Variant({
                'PaymentPending' : IDL.Text,
                'Completed' : IDL.Text,
              }),
              'memo' : IDL.Nat64,
              'productId' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'paid_at_block' : IDL.Opt(IDL.Nat64),
            })
          ),
        ],
        ['query'],
      ),
    'getPendingOrders' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'status' : IDL.Variant({
                'PaymentPending' : IDL.Text,
                'Completed' : IDL.Text,
              }),
              'memo' : IDL.Nat64,
              'productId' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'paid_at_block' : IDL.Opt(IDL.Nat64),
            })
          ),
        ],
        ['query'],
      ),
    'getProduct' : IDL.Func(
        [IDL.Text],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'attachmentURL' : IDL.Text,
              'title' : IDL.Text,
              'soldAmount' : IDL.Nat64,
              'description' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'location' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        ['query'],
      ),
    'getProducts' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'id' : IDL.Text,
              'attachmentURL' : IDL.Text,
              'title' : IDL.Text,
              'soldAmount' : IDL.Nat64,
              'description' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'location' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'makePayment' : IDL.Func(
        [IDL.Text, IDL.Nat64],
        [
          IDL.Variant({
            'Ok' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'updateProduct' : IDL.Func(
        [
          IDL.Record({
            'id' : IDL.Text,
            'attachmentURL' : IDL.Text,
            'title' : IDL.Text,
            'soldAmount' : IDL.Nat64,
            'description' : IDL.Text,
            'seller' : IDL.Principal,
            'price' : IDL.Nat64,
            'location' : IDL.Text,
          }),
        ],
        [
          IDL.Variant({
            'Ok' : IDL.Record({
              'id' : IDL.Text,
              'attachmentURL' : IDL.Text,
              'title' : IDL.Text,
              'soldAmount' : IDL.Nat64,
              'description' : IDL.Text,
              'seller' : IDL.Principal,
              'price' : IDL.Nat64,
              'location' : IDL.Text,
            }),
            'Err' : IDL.Variant({
              'PaymentFailed' : IDL.Text,
              'InvalidPayload' : IDL.Text,
              'NotFound' : IDL.Text,
              'PaymentCompleted' : IDL.Text,
            }),
          }),
        ],
        [],
      ),
    'verifyPayment' : IDL.Func(
        [IDL.Principal, IDL.Nat64, IDL.Nat64, IDL.Nat64],
        [IDL.Bool],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
