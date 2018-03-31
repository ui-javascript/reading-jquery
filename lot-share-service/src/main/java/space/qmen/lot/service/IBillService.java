package space.qmen.lot.service;

import space.qmen.lot.model.dto.BillDetailsDTO;
import space.qmen.lot.model.entity.Bill;
import space.qmen.lot.model.param.WalletParam;
import space.qmen.lot.model.vo.IncomeCharts;

import java.util.List;

public interface IBillService {
    List<Bill> listBill();
    Bill getBillById(Long id);
    Long deleteBill(Long id);

    Long saveBill(Bill bill);
    Long updateBill(Bill bill);

    // 自定义
    Double getWalletTotal(WalletParam walletParam);
    List<BillDetailsDTO> listBillDetails(WalletParam walletParam);
    IncomeCharts listOwnerIncomeCharts(WalletParam walletParam);
}
