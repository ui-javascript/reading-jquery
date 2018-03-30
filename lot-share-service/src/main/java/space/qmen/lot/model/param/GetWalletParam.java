package space.qmen.lot.model.param;

import lombok.Data;

@Data
public class GetWalletParam {
    private Long userId;
    private Integer walletYear;
    private Integer walletMonth;
}
