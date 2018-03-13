package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.domain.Owner;
import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface OwnerDao {

    List<Owner> findAllOwner();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Owner findById(@Param("id") Long id);
    Long saveOwner(Owner owner);
    Long updateOwner(Owner owner);
    Long deleteOwner(Long id);
}