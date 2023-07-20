interface PaymentPersistent {
    id: number;
    sum: number;
    from: string;
    to: string;
}

type PaymentOmEx = Omit<PaymentPersistent, 'id'>;
type PaymentRequisitsPick = Pick<PaymentPersistent, 'from' | 'to'>

type ExtractEX = Extract<'from' | 'to' | PaymentOmEx, string>
type ExcludeEx = Exclude<'from' | 'to' | PaymentOmEx, string>