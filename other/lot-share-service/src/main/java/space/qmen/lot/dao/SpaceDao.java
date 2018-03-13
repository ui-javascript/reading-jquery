package space.qmen.lot.dao;

import org.apache.ibatis.annotations.Param;
import space.qmen.lot.domain.Space;
import java.util.List;

/**
 * Created by Luo_0412 on 2017/5/4.
 */
public interface SpaceDao {

    List<Space> findAllSpace();

    /**
     * 根据城市 ID，获取城市信息
     *
     * @param id
     * @return
     */
    Space findById(@Param("id") Long id);
    Long saveSpace(Space space);
    Long updateSpace(Space space);
    Long deleteSpace(Long id);
}