package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.domain.Renter;
import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface RenterDao {

    List<Renter> findAllRenter();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Renter findById(@Param("id") Long id);
    Long saveRenter(Renter renter);
    Long updateRenter(Renter renter);
    Long deleteRenter(Long id);
}