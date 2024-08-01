<?php
/**
 * 
 * Render Callback For Guide Email
 * 
 */

function wptravel_block_guide_email_render( $attributes ) {
    ob_start();
    $guide_data = get_user_by( 'login', get_the_title() )->data;
    $font_color = "#000";
    $font_size = "16px";

    if( isset( $attributes['textColor'] ) ){
        $font_color = "var(--wp--preset--color--".$attributes['textColor'].")";
       
    }else{
        if( isset($attributes['style']['color']) ){
            $font_color = $attributes['style']['color']['text'];
        }
        
    }   

    if( isset( $attributes['fontSize'] ) ){
        $font_size = "var(--wp--preset--font-size--".$attributes['fontSize'].")";
    }else{
        if( isset($attributes['style']['typography']) ){
            $font_size = $attributes['style']['typography']['fontSize'];
        }
        
    }

    ?>
    <p class="wptravel-guide-email-block">
        <?php 
            if( $guide_data ){ 
                echo esc_html( $guide_data->user_email ); 
            }else{
                echo esc_html__( 'info@info.com', 'wp-travel-blocks' );
            }
            
        ?>
    </p>
    <style>
        .wptravel-guide-email-block{
            color: <?php echo esc_attr( $font_color ); ?>;
            font-size: <?php echo esc_attr( $font_size ); ?>;
        }
    </style>
    <?php

	return ob_get_clean();
}
